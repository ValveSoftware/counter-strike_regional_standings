### Roster Details<br />
Team Name: HAVU<br />
Roster: Airax, Jelo, ottoNd, puuha, uli<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [146](../standings_global.md)<br />
Regional Rank: [97]( ../standings_europe.md)<br />
Final Rank Value:  730.0<br />
<br />
Final Rank Value (730.0) = Starting Rank Value (732.1) + Head To Head Adjustments (-2.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.253[<sup>1</sup>](#table2)
- Bounty Collected: 0.314[<sup>2</sup>](#table1)
- Opponent Network: 0.066[<sup>2</sup>](#table1)
- LAN Wins: 0.023[<sup>2</sup>](#table1)

The average of these factors is 0.164<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 732.1
- 400 + ( ( 0.164 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 732.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |      299 | 2024-07-17 | Rhyno             | L   | 1.000      | -            | -                | -                | -         |    -5.45 | Airax, Jelo, ottoNd, puuha, uli  |
|           29 |      850 | 2024-06-09 | Zero Tenacity     | L   | 0.899      | -            | -                | -                | -         |    -3.74 | Airax, Jelo, ottoNd, puuha, uli  |
|           28 |      951 | 2024-06-07 | GUN5              | L   | 0.887      | -            | -                | -                | -         |    -5.37 | Airax, Jelo, ottoNd, puuha, uli  |
|           27 |     1040 | 2024-06-06 | Sampi             | L   | 0.878      | -            | -                | -                | -         |    -7.38 | Airax, Jelo, ottoNd, puuha, uli  |
|           26 |     1160 | 2024-06-03 | RUBY              | W   | 0.859      | 0.435        | 0.122 (0.045)    | 0.575 (0.215)    | 0 (0.000) |    21.35 | Airax, Jelo, ottoNd, puuha, uli  |
|           25 |     1171 | 2024-06-02 | UHKA              | W   | 0.853      | 0.143        | 0.000 (0.000)    | 0.035 (0.004)    | 0 (0.000) |     3.89 | Airax, Jelo, ottoNd, puuha, uli  |
|           24 |     1185 | 2024-06-02 | Heimo             | W   | 0.852      | 0.143        | 0.008 (0.001)    | 0.095 (0.012)    | 0 (0.000) |    12.18 | Airax, Jelo, ottoNd, puuha, uli  |
|           23 |     1960 | 2024-05-05 | RUBY              | L   | 0.665      | -            | -                | -                | -         |    -4.59 | Airax, Jelo, ottoNd, puuha, uli  |
|           22 |     1973 | 2024-05-04 | RUSH B            | L   | 0.659      | -            | -                | -                | -         |    -6.80 | Airax, Jelo, ottoNd, puuha, uli  |
|           21 |     2014 | 2024-05-02 | Gaimin Gladiators | L   | 0.646      | -            | -                | -                | -         |    -2.85 | Airax, Jelo, ottoNd, puuha, uli  |
|           20 |     2023 | 2024-05-02 | Zero Tenacity     | L   | 0.645      | -            | -                | -                | -         |    -2.74 | Airax, Jelo, ottoNd, puuha, uli  |
|           19 |     2063 | 2024-04-30 | EYEBALLERS        | W   | 0.632      | 0.384        | 0.007 (0.002)    | 0.571 (0.139)    | 0 (0.000) |    14.49 | Airax, Jelo, ottoNd, puuha, uli  |
|           18 |     2082 | 2024-04-29 | Insilio           | W   | 0.626      | 0.435        | 0.030 (0.008)    | 0.582 (0.158)    | 0 (0.000) |    15.74 | Airax, Jelo, ottoNd, puuha, uli  |
|           17 |     2175 | 2024-04-25 | EYEBALLERS        | L   | 0.600      | -            | -                | -                | -         |    -5.02 | Airax, Jelo, ottoNd, puuha, uli  |
|           16 |     2187 | 2024-04-25 | kONO              | L   | 0.598      | -            | -                | -                | -         |    -6.56 | Airax, Jelo, ottoNd, puuha, uli  |
|           15 |     2215 | 2024-04-23 | 1WIN              | L   | 0.586      | -            | -                | -                | -         |    -4.23 | Airax, Jelo, ottoNd, puuha, uli  |
|           14 |     2235 | 2024-04-22 | SINNERS           | L   | 0.579      | -            | -                | -                | -         |    -2.34 | Airax, Jelo, ottoNd, puuha, uli  |
|           13 |     2331 | 2024-04-19 | B8                | L   | 0.559      | -            | -                | -                | -         |    -2.50 | Airax, Jelo, ottoNd, puuha, uli  |
|           12 |     2383 | 2024-04-18 | ALTERNATE aTTaX   | W   | 0.552      | 0.384        | 0.041 (0.009)    | 0.638 (0.135)    | 0 (0.000) |    14.19 | Airax, Jelo, ottoNd, puuha, uli  |
|           11 |     2408 | 2024-04-17 | PARIVISION        | L   | 0.547      | -            | -                | -                | -         |    -2.75 | Airax, Jelo, ottoNd, puuha, uli  |
|           10 |     2469 | 2024-04-15 | Alliance          | L   | 0.532      | -            | -                | -                | -         |    -4.96 | Airax, Jelo, ottoNd, puuha, uli  |
|            9 |     2646 | 2024-04-09 | BLEED             | L   | 0.492      | -            | -                | -                | -         |    -2.36 | Airax, Jelo, ottoNd, puuha, uli  |
|            8 |     2672 | 2024-04-08 | Permitta          | L   | 0.485      | -            | -                | -                | -         |    -3.34 | Airax, Jelo, ottoNd, puuha, uli  |
|            7 |     2774 | 2024-04-04 | Passion UA        | L   | 0.459      | -            | -                | -                | -         |    -2.32 | Airax, Jelo, ottoNd, puuha, uli  |
|            6 |     3502 | 2024-03-02 | Sangal            | L   | 0.238      | -            | -                | -                | -         |    -0.81 | Airax, Banjo, ottoNd, puuha, uli |
|            5 |     3526 | 2024-02-29 | KOI               | L   | 0.226      | -            | -                | -                | -         |    -0.70 | Airax, Banjo, ottoNd, puuha, uli |
|            4 |     3530 | 2024-02-29 | Aurora            | L   | 0.225      | -            | -                | -                | -         |    -0.05 | Airax, Banjo, ottoNd, puuha, uli |
|            3 |     3537 | 2024-02-28 | Spirit Academy    | L   | 0.220      | -            | -                | -                | -         |    -5.01 | Airax, Banjo, ottoNd, puuha, uli |
|            2 |     3617 | 2024-02-24 | ENCE Academy      | L   | 0.195      | -            | -                | -                | -         |    -2.93 | Airax, Banjo, ottoNd, puuha, uli |
|            1 |     3630 | 2024-02-24 | Rounds            | W   | 0.193      | 0.306        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.193) |     0.82 | Airax, Banjo, ottoNd, puuha, uli |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($313.04)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
