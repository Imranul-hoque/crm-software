import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { pricingCards, products } from "@/constants";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import clsx from "clsx";
import { Check } from "lucide-react";
import Link from "next/link";
import { stripe } from "@/lib/stripe";

const HomePage = async () => {

  const prices = await stripe.prices.list({
    product: process.env.NEXT_PLURA_PRODUCT_ID,
    active: true,
  });

  return (
    <div>
      <HeroParallax products={products} />
      <div>
        <ContainerScroll>
          <Image
            src={`/preview.png`}
            alt="hero"
            height={720}
            width={1200}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
      <div className="pb-6">
        <section className="flex justify-center items-center flex-col gap-4 md:!mt-20 mt-[-60px]">
          <h2 className="text-4xl text-center"> Choose what fits you right</h2>
          <p className="text-muted-foreground text-center">
            Our straightforward pricing plans are tailored to meet your needs.
            If
            {" you're"} not <br />
            ready to commit you can get started for free.
          </p>
          <div className="flex  justify-center gap-4 flex-wrap mt-6">
            {prices.data.map((card) => (
              <Card
                key={card.nickname}
                className={clsx("w-[300px] flex flex-col justify-between", {
                  "border-2 border-primary": card.nickname === "Unlimited Saas",
                })}
              >
                <CardHeader>
                  <CardTitle
                    className={clsx("", {
                      "text-muted-foreground":
                        card.nickname !== "Unlimited Saas",
                    })}
                  >
                    {card.nickname}
                  </CardTitle>
                  <CardDescription>
                    {
                      pricingCards.find((c) => c.title === card.nickname)
                        ?.description
                    }
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-4xl font-bold">
                    {card.unit_amount && card.unit_amount / 100}
                  </span>
                  <span className="text-muted-foreground">
                    <span>/ {card.recurring?.interval}</span>
                  </span>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-4">
                  <div>
                    {pricingCards
                      .find((c) => c.title === card.nickname)
                      ?.features.map((feature) => (
                        <div key={feature} className="flex gap-2">
                          <Check />
                          <p>{feature}</p>
                        </div>
                      ))}
                  </div>
                  <Link
                    href={`/agency?plan=${card.id}`}
                    className={clsx(
                      "w-full text-center bg-primary p-2 rounded-md",
                      {
                        "!bg-muted-foreground":
                          card.nickname !== "Unlimited Saas",
                      }
                    )}
                  >
                    Get Started
                  </Link>
                </CardFooter>
              </Card>
            ))}
            <Card className={clsx("w-[300px] flex flex-col justify-between")}>
              <CardHeader>
                <CardTitle
                  className={clsx({
                    "text-muted-foreground": true,
                  })}
                >
                  {pricingCards[0].title}
                </CardTitle>
                <CardDescription>{pricingCards[0].description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-4xl font-bold">$0</span>
                <span>/ month</span>
              </CardContent>
              <CardFooter className="flex flex-col  items-start gap-4 ">
                <div>
                  {pricingCards
                    .find((c) => c.title === "Starter")
                    ?.features.map((feature) => (
                      <div key={feature} className="flex gap-2">
                        <Check />
                        <p>{feature}</p>
                      </div>
                    ))}
                </div>
                <Link
                  href="/agency"
                  className={clsx(
                    "w-full text-center bg-primary p-2 rounded-md",
                    {
                      "!bg-muted-foreground": true,
                    }
                  )}
                >
                  Get Started
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;



