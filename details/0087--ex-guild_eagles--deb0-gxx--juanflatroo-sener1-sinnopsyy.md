### Roster Details<br />
Team Name: ex-Guild Eagles<br />
Roster: deb0, gxx-, juanflatroo, SENER1, sinnopsyy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [87](../standings_global.md)<br />
Regional Rank: [61]( ../standings_europe.md)<br />
Final Rank Value:  931.2<br />
<br />
Final Rank Value (931.2) = Starting Rank Value (899.2) + Head To Head Adjustments (32.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.336[<sup>1</sup>](#table2)
- Bounty Collected: 0.385[<sup>2</sup>](#table1)
- Opponent Network: 0.135[<sup>2</sup>](#table1)
- LAN Wins: 0.091[<sup>2</sup>](#table1)

The average of these factors is 0.237<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 899.2
- 400 + ( ( 0.237 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 899.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           48 |      319 | 2024-06-11 | SINNERS           | L   | 0.999      | -            | -                | -                | -         |   -11.64 | deb0, gxx-, juanflatroo, SENER1, sinnopsyy       |
|           47 |      916 | 2024-05-25 | Zero Tenacity     | L   | 0.887      | -            | -                | -                | -         |    -7.51 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           46 |      927 | 2024-05-25 | Kosovo            | W   | 0.885      | -            | -                | -                | 0 (0.000) |    10.03 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           45 |      934 | 2024-05-24 | Zero Tenacity     | W   | 0.881      | 0.273        | 0.153 (0.037)    | 1.000 (0.240)    | 0 (0.000) |    20.59 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           44 |      939 | 2024-05-24 | Serbia            | W   | 0.879      | 0.273        | 0.019 (0.004)    | 0.267 (0.064)    | 0 (0.000) |    10.06 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           43 |     1171 | 2024-05-17 | Sashi             | L   | 0.831      | -            | -                | -                | -         |    -3.41 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           42 |     1513 | 2024-05-05 | 1WIN              | L   | 0.752      | -            | -                | -                | -         |    -9.45 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           41 |     1625 | 2024-04-29 | EYEBALLERS        | L   | 0.714      | -            | -                | -                | -         |   -11.12 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           40 |     1666 | 2024-04-27 | Insilio           | L   | 0.700      | -            | -                | -                | -         |    -9.41 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           39 |     1694 | 2024-04-26 | BLEED             | L   | 0.693      | -            | -                | -                | -         |    -1.82 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           38 |     1726 | 2024-04-25 | PARIVISION        | L   | 0.686      | -            | -                | -                | -         |    -9.80 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           37 |     1752 | 2024-04-24 | Zero Tenacity     | W   | 0.679      | 0.435        | 0.153 (0.045)    | 1.000 (0.295)    | 0 (0.000) |    14.32 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           36 |     1778 | 2024-04-22 | 3DMAX             | L   | 0.667      | -            | -                | -                | -         |    -3.38 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           35 |     1790 | 2024-04-22 | Sangal            | W   | 0.664      | 0.435        | 0.231 (0.067)    | 0.853 (0.246)    | 0 (0.000) |    16.05 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           34 |     1903 | 2024-04-18 | Sashi             | L   | 0.641      | -            | -                | -                | -         |    -4.96 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           33 |     1912 | 2024-04-18 | KOI               | W   | 0.640      | 0.143        | 0.090 (0.008)    | 0.437 (0.040)    | 0 (0.000) |    16.41 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           32 |     1922 | 2024-04-18 | FRAGMATIC         | W   | 0.640      | -            | -                | -                | 0 (0.000) |     1.06 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           31 |     1928 | 2024-04-18 | AMKAL             | L   | 0.639      | -            | -                | -                | -         |    -4.30 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           30 |     1996 | 2024-04-16 | Sashi             | W   | 0.626      | 0.384        | 0.202 (0.049)    | 1.000 (0.241)    | -         |    15.35 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           29 |     2190 | 2024-04-09 | Metizport         | W   | 0.579      | 0.384        | 0.065 (0.015)    | 0.489 (0.109)    | -         |    12.52 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           28 |     2356 | 2024-04-03 | AMKAL             | L   | 0.540      | -            | -                | -                | -         |    -3.74 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           27 |     2388 | 2024-04-02 | Insilio           | L   | 0.534      | -            | -                | -                | -         |    -6.84 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           26 |     2400 | 2024-04-02 | AMKAL             | W   | 0.532      | 0.143        | 0.135 (0.010)    | 0.559 (0.043)    | -         |    13.09 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           25 |     2406 | 2024-04-02 | 500               | L   | 0.531      | -            | -                | -                | -         |   -11.01 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           24 |     2412 | 2024-04-01 | 500               | W   | 0.527      | 0.384        | -                | 0.191 (0.039)    | -         |     5.74 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           23 |     2491 | 2024-03-27 | ALTERNATE aTTaX   | L   | 0.494      | -            | -                | -                | -         |    -4.96 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           22 |     2560 | 2024-03-22 | VP.Prodigy        | L   | 0.459      | -            | -                | -                | -         |    -7.20 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           21 |     3100 | 2024-02-27 | Croatia           | L   | 0.301      | -            | -                | -                | -         |    -8.60 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           20 |     3109 | 2024-02-27 | Metizport         | W   | 0.300      | 0.143        | 0.065 (0.003)    | -                | -         |     5.54 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           19 |     3190 | 2024-02-24 | GamerLegion       | L   | 0.278      | -            | -                | -                | -         |    -3.45 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           18 |     3197 | 2024-02-23 | BetBoom           | W   | 0.272      | 0.143        | 0.406 (0.016)    | 0.745 (0.029)    | 1 (0.272) |     8.44 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           17 |     3215 | 2024-02-22 | Gaimin Gladiators | L   | 0.266      | -            | -                | -                | -         |    -1.80 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           16 |     3234 | 2024-02-21 | ex-Preasy         | W   | 0.260      | -            | -                | -                | 1 (0.260) |     3.83 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           15 |     3268 | 2024-02-20 | Romania           | W   | 0.253      | -            | -                | -                | 1 (0.253) |     3.52 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           14 |     3292 | 2024-02-19 | ENCE              | L   | 0.246      | -            | -                | -                | -         |    -0.26 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           13 |     3301 | 2024-02-19 | MOUZ              | L   | 0.245      | -            | -                | -                | -         |    -0.02 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           12 |     3521 | 2024-02-08 | Insilio           | L   | 0.174      | -            | -                | -                | -         |    -2.40 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           11 |     3524 | 2024-02-08 | RUBY              | L   | 0.173      | -            | -                | -                | -         |    -2.05 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|           10 |     3767 | 2024-01-25 | PERA              | L   | 0.081      | -            | -                | -                | -         |    -0.95 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|            9 |     3782 | 2024-01-24 | ALTERNATE aTTaX   | W   | 0.074      | -            | -                | -                | -         |     1.66 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|            8 |     3803 | 2024-01-23 | Slovakia          | W   | 0.067      | -            | -                | -                | -         |     1.14 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|            7 |     3806 | 2024-01-23 | ALTERNATE aTTaX   | W   | 0.066      | -            | -                | -                | -         |     1.50 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|            6 |     3827 | 2024-01-22 | PERA              | L   | 0.060      | -            | -                | -                | -         |    -0.71 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|            5 |     3829 | 2024-01-22 | Viperio           | W   | 0.060      | -            | -                | -                | -         |     0.19 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|            4 |     3834 | 2024-01-22 | Rebels            | W   | 0.060      | -            | -                | -                | -         |     1.37 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|            3 |     4033 | 2024-01-18 | Sprout            | W   | 0.032      | -            | -                | -                | -         |     0.09 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy      |
|            2 |     4050 | 2024-01-17 | Into the Breach   | W   | 0.028      | -            | -                | -                | -         |     0.20 | Devilwalk, juanflatroo, rigoN, SENER1, sinnopsyy |
|            1 |     4056 | 2024-01-17 | Capcarap          | W   | 0.028      | -            | -                | -                | -         |     0.05 | Devilwalk, juanflatroo, rigoN, SENER1, sinnopsyy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,740.59)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-24 |      0.881 | $2,158.00      | $1,900.28       |
| 2024-05-18 |      0.840 | $1,000.00      | $840.30         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
