### Roster Details<br />
Team Name: Johnny Speeds<br />
Roster: bobeksde, chawzyyy, draken, Ro1f, spooke<br />
Global Rank: [30](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [22]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1221.3<br />
<br />
Final Rank Value (1221.3) = Starting Rank Value (1307.3) + Head To Head Adjustments (-86.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.524[<sup>1</sup>](#table2)
- Bounty Collected: 0.378[<sup>2</sup>](#table1)
- Opponent Network: 0.203[<sup>2</sup>](#table1)
- LAN Wins: 0.652[<sup>2</sup>](#table1)

The average of these factors is 0.439<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1307.3
- 400 + ( ( 0.439 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1307.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           47 |       28 | 2024-07-31 | fnatic          | W   | 1.000      | 0.143        | 0.374 (0.053)    | -                | 0 (0.000) |    24.53 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           46 |      367 | 2024-07-20 | Nexus           | W   | 1.000      | 0.333        | -                | 0.465 (0.155)    | 0 (0.000) |     2.97 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           45 |      386 | 2024-07-20 | Illuminar       | L   | 1.000      | -            | -                | -                | -         |   -26.09 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           44 |      400 | 2024-07-19 | Preasy          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.60 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           43 |      462 | 2024-07-18 | 9INE            | W   | 1.000      | 0.333        | -                | 0.486 (0.162)    | -         |     5.19 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           42 |      469 | 2024-07-18 | Passion UA      | L   | 1.000      | -            | -                | -                | -         |   -23.78 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           41 |      589 | 2024-07-16 | Young Ninjas    | W   | 1.000      | -            | -                | -                | -         |     2.18 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           40 |      636 | 2024-07-15 | Endpoint        | W   | 1.000      | 0.371        | -                | 0.523 (0.194)    | -         |     3.97 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           39 |      683 | 2024-07-12 | TSM             | L   | 1.000      | -            | -                | -                | -         |   -25.25 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           38 |      721 | 2024-07-10 | Sashi           | W   | 1.000      | 0.358        | 0.187 (0.067)    | 0.973 (0.348)    | -         |    13.99 | bobeksde, chawzyyy, Ro1f, SHiNE, spooke   |
|           37 |      723 | 2024-07-10 | Endpoint        | W   | 1.000      | 0.358        | -                | 0.523 (0.187)    | -         |     3.66 | bobeksde, chawzyyy, Ro1f, SHiNE, spooke   |
|           36 |      744 | 2024-07-09 | 9INE            | W   | 1.000      | 0.371        | 0.022 (0.008)    | 0.486 (0.180)    | -         |     4.90 | bobeksde, chawzyyy, Ro1f, SHiNE, spooke   |
|           35 |      746 | 2024-07-09 | Revenant        | L   | 1.000      | -            | -                | -                | -         |   -28.44 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           34 |      769 | 2024-07-07 | lajtbitexe      | W   | 1.000      | -            | -                | -                | -         |     1.55 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           33 |      777 | 2024-07-05 | kONO            | W   | 1.000      | 0.333        | 0.029 (0.010)    | 0.537 (0.179)    | -         |     3.32 | bobeksde, chawzyyy, draken, Ro1f, spooke  |
|           32 |      787 | 2024-06-30 | Young Gods      | W   | 0.992      | -            | -                | -                | -         |     1.45 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           31 |      809 | 2024-06-27 | Revenant        | W   | 0.971      | 0.333        | 0.027 (0.009)    | -                | -         |     2.59 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           30 |      813 | 2024-06-25 | Revenant        | W   | 0.958      | 0.333        | 0.027 (0.009)    | -                | -         |     2.48 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           29 |      820 | 2024-06-23 | los kogutos     | W   | 0.944      | -            | -                | -                | -         |     0.25 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|           28 |      888 | 2024-06-15 | Lilmix          | W   | 0.892      | 0.377        | 0.023 (0.008)    | -                | 1 (0.892) |     3.20 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           27 |      928 | 2024-06-14 | Lilmix          | W   | 0.885      | 0.377        | 0.023 (0.008)    | -                | 1 (0.885) |     3.15 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|           26 |      970 | 2024-06-13 | Kappa Bar       | W   | 0.877      | -            | -                | -                | 1 (0.877) |     0.60 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           25 |     1069 | 2024-06-09 | Alliance        | W   | 0.853      | -            | -                | -                | 1 (0.853) |     2.91 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           24 |     1108 | 2024-06-09 | Preasy          | W   | 0.850      | -            | -                | -                | 1 (0.850) |     2.02 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           23 |     1382 | 2024-06-04 | Enterprise      | L   | 0.817      | -            | -                | -                | -         |   -22.01 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           22 |     1401 | 2024-06-03 | brazylijski luz | W   | 0.812      | -            | -                | -                | -         |     2.24 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           21 |     1403 | 2024-06-03 | Zero Tenacity   | W   | 0.811      | 0.371        | 0.139 (0.042)    | 1.000 (0.301)    | -         |     8.85 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           20 |     1493 | 2024-05-31 | UNiTY           | L   | 0.790      | -            | -                | -                | -         |   -21.20 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           19 |     1598 | 2024-05-26 | Preasy          | W   | 0.758      | -            | -                | -                | -         |     1.62 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           18 |     1696 | 2024-05-22 | Permitta        | W   | 0.730      | 0.371        | -                | 0.799 (0.216)    | -         |     2.32 | bobeksde, draken, Lekr0, Ro1f, spooke     |
|           17 |     2009 | 2024-05-14 | kONO            | L   | 0.677      | -            | -                | -                | -         |   -19.57 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           16 |     2025 | 2024-05-13 | UNiTY           | W   | 0.672      | -            | -                | -                | -         |     2.99 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           15 |     2031 | 2024-05-13 | ECLOT           | W   | 0.671      | 0.333        | 0.065 (0.014)    | 0.502 (0.112)    | -         |     5.75 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           14 |     2042 | 2024-05-12 | Verdant         | W   | 0.666      | -            | -                | -                | -         |     2.71 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           13 |     2055 | 2024-05-12 | Preasy          | L   | 0.664      | -            | -                | -                | -         |   -19.75 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           12 |     2071 | 2024-05-11 | Lilmix          | W   | 0.660      | -            | -                | -                | 1 (0.660) |     1.93 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           11 |     2085 | 2024-05-11 | Flying Angels   | W   | 0.658      | -            | -                | -                | 1 (0.658) |     0.28 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|           10 |     2103 | 2024-05-10 | FAVBET          | W   | 0.650      | -            | -                | -                | -         |     1.18 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            9 |     2627 | 2024-04-18 | UNiTY           | W   | 0.504      | -            | -                | -                | -         |     2.21 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            8 |     2692 | 2024-04-16 | Viperio         | W   | 0.492      | -            | -                | -                | -         |     0.39 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            7 |     2938 | 2024-04-07 | Alliance        | W   | 0.433      | -            | -                | -                | -         |     1.09 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|            6 |     2946 | 2024-04-07 | Metizport       | L   | 0.431      | -            | -                | -                | -         |   -11.86 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|            5 |     2956 | 2024-04-06 | JANO            | W   | 0.425      | -            | -                | -                | -         |     0.40 | bobeksde, chawzyyy, draken, Lekr0, spooke |
|            4 |     3556 | 2024-03-09 | Alliance        | L   | 0.238      | -            | -                | -                | -         |    -6.93 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            3 |     3657 | 2024-03-05 | B8              | L   | 0.213      | -            | -                | -                | -         |    -5.15 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            2 |     3663 | 2024-03-05 | Insilio         | W   | 0.213      | -            | -                | -                | -         |     0.61 | chawzyyy, draken, Lekr0, Ro1f, spooke     |
|            1 |     3670 | 2024-03-05 | Sashi           | W   | 0.212      | -            | -                | -                | -         |     1.96 | chawzyyy, draken, Lekr0, Ro1f, spooke     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($40,660.24)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-20 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-07-09 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-06-30 |      0.992 | $662.00        | $656.92         |
| 2024-06-27 |      0.971 | $5,000.00      | $4,853.12       |
| 2024-06-15 |      0.892 | $11,615.00     | $10,359.71      |
| 2024-06-09 |      0.853 | $7,224.00      | $6,158.72       |
| 2024-06-06 |      0.831 | $1,000.00      | $831.17         |
| 2024-05-13 |      0.671 | $6,000.00      | $4,023.51       |
| 2024-05-11 |      0.660 | $4,170.00      | $2,750.75       |
| 2024-04-18 |      0.504 | $6,000.00      | $3,026.34       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
