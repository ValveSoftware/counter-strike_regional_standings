### Roster Details<br />
Team Name: BIG<br />
Roster: JDC, Krimbo, rigoN, syrsoN, tabseN<br />
Global Rank: [28](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [21]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1245.0<br />
<br />
Final Rank Value (1245.0) = Starting Rank Value (1242.7) + Head To Head Adjustments (2.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.533[<sup>1</sup>](#table2)
- Bounty Collected: 0.462[<sup>2</sup>](#table1)
- Opponent Network: 0.158[<sup>2</sup>](#table1)
- LAN Wins: 0.480[<sup>2</sup>](#table1)

The average of these factors is 0.408<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1242.7
- 400 + ( ( 0.408 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1242.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |       14 | 2024-07-31 | Natus Vincere | L   | 1.000      | -            | -                | -                | -         |    -0.53 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           31 |      897 | 2024-06-15 | Permitta      | L   | 0.890      | -            | -                | -                | -         |   -24.06 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           30 |      923 | 2024-06-14 | Space         | W   | 0.885      | 0.435        | -                | 0.406 (0.156)    | 0 (0.000) |     2.98 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           29 |     1252 | 2024-06-06 | fnatic        | L   | 0.833      | -            | -                | -                | -         |    -6.14 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           28 |     1284 | 2024-06-06 | Eternal Fire  | L   | 0.831      | -            | -                | -                | -         |    -2.71 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           27 |     1315 | 2024-06-05 | BetBoom       | L   | 0.826      | -            | -                | -                | -         |    -9.08 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           26 |     1329 | 2024-06-05 | Complexity    | L   | 0.825      | -            | -                | -                | -         |    -2.82 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           25 |     1339 | 2024-06-05 | FURIA         | W   | 0.824      | 0.715        | 0.286 (0.169)    | 0.495 (0.292)    | 1 (0.824) |    22.00 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           24 |     1521 | 2024-05-29 | HEROIC        | L   | 0.781      | -            | -                | -                | -         |    -3.47 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           23 |     1531 | 2024-05-29 | Virtus.pro    | W   | 0.780      | 0.624        | 0.483 (0.235)    | 0.327 (0.159)    | 1 (0.780) |    22.41 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           22 |     1548 | 2024-05-28 | FlyQuest      | W   | 0.774      | 0.624        | 0.106 (0.051)    | 0.298 (0.144)    | 1 (0.774) |    11.89 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           21 |     1572 | 2024-05-27 | Natus Vincere | L   | 0.767      | -            | -                | -                | -         |    -0.41 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           20 |     1767 | 2024-05-20 | MIBR          | L   | 0.719      | -            | -                | -                | -         |    -5.25 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           19 |     1786 | 2024-05-19 | Astralis      | L   | 0.713      | -            | -                | -                | -         |    -1.45 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           18 |     2162 | 2024-05-07 | G2            | L   | 0.632      | -            | -                | -                | -         |    -0.38 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           17 |     2224 | 2024-05-03 | HEROIC        | W   | 0.607      | 0.889        | 0.210 (0.113)    | 0.382 (0.206)    | 1 (0.607) |    16.78 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           16 |     2233 | 2024-05-03 | PERA          | W   | 0.605      | 0.889        | 0.048 (0.026)    | 0.452 (0.243)    | 1 (0.605) |     3.04 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           15 |     2260 | 2024-05-02 | Natus Vincere | L   | 0.598      | -            | -                | -                | -         |    -0.25 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           14 |     2285 | 2024-05-01 | BOSS          | W   | 0.591      | 0.889        | 0.014 (0.008)    | 0.334 (0.176)    | 1 (0.591) |     1.88 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           13 |     2496 | 2024-04-21 | BLEED         | L   | 0.525      | -            | -                | -                | -         |   -12.19 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           12 |     2522 | 2024-04-20 | GamerLegion   | W   | 0.519      | 0.384        | 0.177 (0.035)    | -                | 0 (0.000) |     6.01 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           11 |     2632 | 2024-04-18 | LEON          | W   | 0.504      | -            | -                | -                | 0 (0.000) |     0.80 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           10 |     2741 | 2024-04-13 | OG            | L   | 0.472      | -            | -                | -                | -         |   -10.95 | JDC, Krimbo, prosus, syrsoN, tabseN |
|            9 |     2750 | 2024-04-12 | FORZE         | W   | 0.466      | 0.684        | 0.060 (0.019)    | 0.189 (0.060)    | 0 (0.000) |     2.53 | JDC, Krimbo, prosus, syrsoN, tabseN |
|            8 |     2821 | 2024-04-10 | Gods Reign    | W   | 0.453      | 0.684        | 0.043 (0.013)    | 0.206 (0.064)    | -         |     1.16 | JDC, Krimbo, prosus, syrsoN, tabseN |
|            7 |     2880 | 2024-04-09 | BetBoom       | L   | 0.445      | -            | -                | -                | -         |    -3.67 | JDC, Krimbo, prosus, syrsoN, tabseN |
|            6 |     3059 | 2024-04-03 | EYEBALLERS    | W   | 0.405      | 0.384        | -                | 0.513 (0.080)    | -         |     1.79 | JDC, Krimbo, prosus, syrsoN, tabseN |
|            5 |     3539 | 2024-03-09 | Spirit        | L   | 0.240      | -            | -                | -                | -         |    -0.16 | JDC, Krimbo, prosus, syrsoN, tabseN |
|            4 |     3568 | 2024-03-08 | GamerLegion   | W   | 0.233      | -            | -                | -                | -         |     0.61 | JDC, Krimbo, prosus, syrsoN, tabseN |
|            3 |     3702 | 2024-03-03 | Young Ninjas  | L   | 0.200      | -            | -                | -                | -         |    -5.88 | JDC, Krimbo, prosus, syrsoN, tabseN |
|            2 |     3760 | 2024-03-01 | AMKAL         | W   | 0.184      | 0.500        | 0.132 (0.012)    | -                | -         |     2.22 | JDC, Krimbo, prosus, syrsoN, tabseN |
|            1 |     3787 | 2024-02-28 | BLEED         | L   | 0.171      | -            | -                | -                | -         |    -4.43 | JDC, Krimbo, prosus, syrsoN, tabseN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($43,733.61)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.13) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.899 | $2,000.00      | $1,798.54       |
| 2024-06-09 |      0.852 | $8,000.00      | $6,819.67       |
| 2024-06-02 |      0.807 | $6,000.00      | $4,841.28       |
| 2024-05-12 |      0.666 | $17,500.00     | $11,650.32      |
| 2024-04-14 |      0.479 | $35,000.00     | $16,772.29      |
| 2024-03-10 |      0.247 | $7,500.00      | $1,851.52       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
