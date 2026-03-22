import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-display font-bold gradient-text mb-4">
          404
        </div>
        <h1 className="text-2xl font-bold text-clinic-charcoal mb-2">
          Страница не найдена
        </h1>
        <p className="text-steel-500 mb-8">
          Возможно, страница была перемещена или удалена. Вернитесь на главную
          или перейдите к услугам.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild variant="premium" size="lg">
            <Link href="/">
              <Home className="w-4 h-4" />
              На главную
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/services">
              <ArrowLeft className="w-4 h-4" />
              Услуги и цены
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
