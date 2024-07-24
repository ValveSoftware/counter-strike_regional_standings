### Roster Details<br />
Team Name: Insilio<br />
Roster: faydett, FpSSS, Pipw, Polt, sugaR<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [73](../standings_global.md)<br />
Regional Rank: [50]( ../standings_europe.md)<br />
Final Rank Value:  963.2<br />
<br />
Final Rank Value (963.2) = Starting Rank Value (910.1) + Head To Head Adjustments (53.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.395[<sup>1</sup>](#table2)
- Bounty Collected: 0.388[<sup>2</sup>](#table1)
- Opponent Network: 0.225[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.252<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 910.1
- 400 + ( ( 0.252 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 910.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           50 |        4 | 2024-07-24 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |    -9.05 | faydett, FpSSS, Pipw, Polt, sugaR |
|           49 |       76 | 2024-07-22 | Rebels            | L   | 1.000      | -            | -                | -                | -         |   -13.79 | faydett, FpSSS, Pipw, Polt, sugaR |
|           48 |      141 | 2024-07-20 | UNiTY             | W   | 1.000      | 0.371        | 0.032 (0.012)    | -                | 0 (0.000) |    15.13 | faydett, FpSSS, Pipw, Polt, sugaR |
|           47 |      179 | 2024-07-19 | 9INE              | L   | 1.000      | -            | -                | -                | -         |   -19.16 | faydett, FpSSS, Pipw, Polt, sugaR |
|           46 |      216 | 2024-07-18 | EYEBALLERS        | W   | 1.000      | 0.500        | -                | 0.571 (0.286)    | 0 (0.000) |     9.33 | faydett, FpSSS, Pipw, Polt, sugaR |
|           45 |      340 | 2024-07-16 | KOI               | L   | 1.000      | -            | -                | -                | -         |    -9.94 | faydett, FpSSS, Pipw, Polt, sugaR |
|           44 |      419 | 2024-07-14 | Permitta          | W   | 1.000      | 0.371        | 0.032 (0.012)    | 0.790 (0.293)    | 0 (0.000) |    14.93 | faydett, FpSSS, Pipw, Polt, sugaR |
|           43 |      480 | 2024-07-10 | Preasy            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.51 | faydett, FpSSS, Pipw, Polt, sugaR |
|           42 |      503 | 2024-07-09 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -12.93 | faydett, FpSSS, Pipw, Polt, sugaR |
|           41 |      522 | 2024-07-08 | FLuffy Gangsters  | L   | 1.000      | -            | -                | -                | -         |   -28.05 | faydett, FpSSS, Pipw, Polt, sugaR |
|           40 |      780 | 2024-06-10 | ARCRED            | W   | 0.907      | 0.372        | 0.048 (0.016)    | -                | 0 (0.000) |    11.06 | faydett, FpSSS, Pipw, Polt, sugaR |
|           39 |      828 | 2024-06-09 | RUBY              | W   | 0.900      | 0.372        | 0.122 (0.041)    | 0.575 (0.193)    | 0 (0.000) |    11.41 | faydett, FpSSS, Pipw, Polt, sugaR |
|           38 |      882 | 2024-06-08 | Zero Tenacity     | W   | 0.894      | 0.372        | 0.173 (0.058)    | 1.000 (0.333)    | 0 (0.000) |    18.59 | faydett, FpSSS, Pipw, Polt, sugaR |
|           37 |      949 | 2024-06-07 | Aurora Young Blud | W   | 0.887      | -            | -                | -                | 0 (0.000) |     8.44 | faydett, FpSSS, Pipw, Polt, sugaR |
|           36 |     1151 | 2024-06-03 | RUBY              | L   | 0.861      | -            | -                | -                | -         |   -13.49 | faydett, FpSSS, Pipw, Polt, sugaR |
|           35 |     1208 | 2024-06-01 | 1WIN              | W   | 0.846      | 0.372        | 0.035 (0.011)    | 0.542 (0.171)    | 0 (0.000) |    15.19 | faydett, FpSSS, Pipw, Polt, sugaR |
|           34 |     1259 | 2024-05-30 | VP.Prodigy        | W   | 0.834      | 0.372        | 0.033 (0.010)    | -                | 0 (0.000) |    12.14 | faydett, FpSSS, Pipw, Polt, sugaR |
|           33 |     1917 | 2024-05-07 | RUBY              | L   | 0.680      | -            | -                | -                | -         |   -10.73 | faydett, FpSSS, Pipw, Polt, sugaR |
|           32 |     1936 | 2024-05-06 | Zero Tenacity     | L   | 0.673      | -            | -                | -                | -         |    -8.28 | faydett, FpSSS, Pipw, Polt, sugaR |
|           31 |     1940 | 2024-05-06 | BLEED             | L   | 0.672      | -            | -                | -                | -         |    -6.76 | faydett, FpSSS, Pipw, Polt, sugaR |
|           30 |     1986 | 2024-05-03 | Permitta          | W   | 0.653      | 0.435        | -                | 0.790 (0.224)    | -         |     9.14 | faydett, FpSSS, Pipw, Polt, sugaR |
|           29 |     1998 | 2024-05-03 | BetBoom           | L   | 0.651      | -            | -                | -                | -         |    -1.25 | faydett, FpSSS, Pipw, Polt, sugaR |
|           28 |     2030 | 2024-05-01 | OG                | W   | 0.640      | 0.435        | 0.170 (0.047)    | -                | -         |    14.37 | faydett, FpSSS, Pipw, Polt, sugaR |
|           27 |     2041 | 2024-05-01 | Nexus             | W   | 0.639      | -            | -                | -                | -         |     7.24 | faydett, FpSSS, Pipw, Polt, sugaR |
|           26 |     2082 | 2024-04-29 | HAVU              | L   | 0.626      | -            | -                | -                | -         |   -15.74 | faydett, FpSSS, Pipw, Polt, sugaR |
|           25 |     2118 | 2024-04-27 | ex-Guild Eagles   | W   | 0.613      | -            | -                | -                | -         |     7.82 | faydett, FpSSS, Pipw, Polt, sugaR |
|           24 |     2125 | 2024-04-27 | Permitta          | W   | 0.612      | 0.396        | -                | 0.790 (0.192)    | -         |     9.94 | faydett, FpSSS, Pipw, Polt, sugaR |
|           23 |     2147 | 2024-04-26 | ARCRED            | L   | 0.606      | -            | -                | -                | -         |   -11.68 | faydett, FpSSS, Pipw, Polt, sugaR |
|           22 |     2152 | 2024-04-26 | Enterprise        | W   | 0.605      | 0.396        | 0.050 (0.012)    | 0.646 (0.155)    | -         |     8.95 | faydett, FpSSS, Pipw, Polt, sugaR |
|           21 |     2186 | 2024-04-25 | MOUZ NXT          | W   | 0.598      | 0.435        | 0.169 (0.044)    | 1.000 (0.260)    | -         |    12.24 | faydett, FpSSS, Pipw, Polt, sugaR |
|           20 |     2212 | 2024-04-23 | EYEBALLERS        | W   | 0.587      | 0.435        | -                | 0.571 (0.146)    | -         |     8.03 | faydett, FpSSS, Pipw, Polt, sugaR |
|           19 |     2261 | 2024-04-21 | Permitta          | L   | 0.571      | -            | -                | -                | -         |    -8.26 | faydett, FpSSS, Pipw, Polt, sugaR |
|           18 |     2799 | 2024-04-03 | AMKAL             | L   | 0.454      | -            | -                | -                | -         |    -4.24 | faydett, FpSSS, Pipw, Polt, sugaR |
|           17 |     2840 | 2024-04-02 | ex-Guild Eagles   | W   | 0.447      | -            | -                | -                | -         |     5.39 | faydett, FpSSS, Pipw, Polt, sugaR |
|           16 |     2856 | 2024-04-02 | PARIVISION        | W   | 0.445      | -            | -                | -                | -         |     9.59 | faydett, FpSSS, Pipw, Polt, sugaR |
|           15 |     3081 | 2024-03-18 | Sashi             | L   | 0.346      | -            | -                | -                | -         |    -2.62 | faydett, FpSSS, Pipw, Polt, sugaR |
|           14 |     3139 | 2024-03-15 | CYBERSHOKE        | W   | 0.327      | -            | -                | -                | -         |     2.20 | faydett, FpSSS, Pipw, Polt, sugaR |
|           13 |     3213 | 2024-03-13 | INGLORIOUS        | W   | 0.313      | -            | -                | -                | -         |     1.10 | faydett, FpSSS, Pipw, Polt, sugaR |
|           12 |     3264 | 2024-03-11 | 1WIN              | W   | 0.300      | -            | -                | -                | -         |     4.56 | faydett, FpSSS, Pipw, Polt, sugaR |
|           11 |     3308 | 2024-03-09 | Fraud5            | W   | 0.286      | -            | -                | -                | -         |     1.78 | faydett, FpSSS, Pipw, Polt, sugaR |
|           10 |     3349 | 2024-03-07 | Sashi             | L   | 0.274      | -            | -                | -                | -         |    -1.90 | faydett, FpSSS, Pipw, Polt, sugaR |
|            9 |     3380 | 2024-03-06 | The Chosen Few    | W   | 0.267      | -            | -                | -                | -         |     1.83 | faydett, FpSSS, Pipw, Polt, sugaR |
|            8 |     3421 | 2024-03-05 | Johnny Speeds     | L   | 0.260      | -            | -                | -                | -         |    -0.70 | faydett, FpSSS, Pipw, Polt, sugaR |
|            7 |     3429 | 2024-03-05 | Betera            | W   | 0.260      | -            | -                | -                | -         |     1.98 | faydett, FpSSS, Pipw, Polt, sugaR |
|            6 |     3963 | 2024-02-09 | Sashi             | L   | 0.093      | -            | -                | -                | -         |    -0.56 | faydett, FpSSS, Pipw, Polt, sugaR |
|            5 |     3973 | 2024-02-08 | ex-Guild Eagles   | W   | 0.087      | -            | -                | -                | -         |     1.12 | faydett, FpSSS, Pipw, Polt, sugaR |
|            4 |     3979 | 2024-02-08 | AMKAL             | L   | 0.086      | -            | -                | -                | -         |    -0.69 | faydett, FpSSS, Pipw, Polt, sugaR |
|            3 |     4143 | 2024-01-30 | Sashi             | L   | 0.028      | -            | -                | -                | -         |    -0.17 | faydett, FpSSS, Pipw, Polt, sugaR |
|            2 |     4148 | 2024-01-30 | fnatic            | W   | 0.027      | -            | -                | -                | -         |     0.82 | faydett, FpSSS, Pipw, Polt, sugaR |
|            1 |     4150 | 2024-01-30 | The Neighbours    | W   | 0.026      | -            | -                | -                | -         |     0.21 | faydett, FpSSS, Pipw, Polt, sugaR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,163.03)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-10 |      0.907 | $7,000.00      | $6,351.99       |
| 2024-05-04 |      0.660 | $2,000.00      | $1,319.46       |
| 2024-03-25 |      0.393 | $1,250.00      | $491.58         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
