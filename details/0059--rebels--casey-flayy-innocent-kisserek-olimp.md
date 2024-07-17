### Roster Details<br />
Team Name: Rebels<br />
Roster: casey, Flayy, innocent, kisserek, olimp<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [59](../standings_global.md)<br />
Regional Rank: [42]( ../standings_europe.md)<br />
Final Rank Value:  1047.0<br />
<br />
Final Rank Value (1047.0) = Starting Rank Value (1055.6) + Head To Head Adjustments (-8.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.438[<sup>1</sup>](#table2)
- Bounty Collected: 0.417[<sup>2</sup>](#table1)
- Opponent Network: 0.195[<sup>2</sup>](#table1)
- LAN Wins: 0.171[<sup>2</sup>](#table1)

The average of these factors is 0.305<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1055.6
- 400 + ( ( 0.305 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1055.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           48 |       16 | 2024-07-17 | 9INE              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.89 | casey, Flayy, innocent, kisserek, olimp |
|           47 |      103 | 2024-07-15 | brazylijski luz   | L   | 1.000      | -            | -                | -                | -         |   -23.02 | casey, Flayy, innocent, kisserek, olimp |
|           46 |      113 | 2024-07-15 | Sangal            | L   | 1.000      | -            | -                | -                | -         |    -8.90 | casey, Flayy, innocent, kisserek, olimp |
|           45 |      152 | 2024-07-12 | Enterprise        | W   | 1.000      | 0.371        | 0.055 (0.020)    | 0.635 (0.235)    | 0 (0.000) |    12.67 | casey, Flayy, innocent, kisserek, olimp |
|           44 |      189 | 2024-07-10 | Belarus           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.82 | casey, Flayy, innocent, kisserek, olimp |
|           43 |      201 | 2024-07-09 | 500               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.81 | casey, Flayy, innocent, kisserek, olimp |
|           42 |      237 | 2024-07-08 | Verdant           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.04 | casey, Flayy, innocent, kisserek, olimp |
|           41 |      427 | 2024-06-13 | Sampi             | L   | 0.974      | -            | -                | -                | -         |   -21.67 | casey, Flayy, innocent, kisserek, olimp |
|           40 |      452 | 2024-06-12 | PERA              | L   | 0.967      | -            | -                | -                | -         |   -17.13 | casey, Flayy, innocent, kisserek, olimp |
|           39 |      494 | 2024-06-10 | Permitta          | W   | 0.954      | 0.379        | 0.039 (0.014)    | 0.794 (0.287)    | 0 (0.000) |    10.73 | casey, Flayy, innocent, kisserek, olimp |
|           38 |      533 | 2024-06-09 | Rhyno             | L   | 0.947      | -            | -                | -                | -         |   -16.35 | casey, Flayy, kisserek, olimp, SZPERO   |
|           37 |      658 | 2024-06-07 | BLEED             | W   | 0.934      | 0.500        | 0.192 (0.090)    | 0.379 (0.177)    | -         |    21.14 | casey, Flayy, innocent, kisserek, olimp |
|           36 |      778 | 2024-06-05 | 9INE              | W   | 0.921      | -            | -                | -                | -         |     5.68 | casey, Flayy, innocent, kisserek, olimp |
|           35 |      968 | 2024-05-30 | PERA              | W   | 0.881      | 0.379        | 0.067 (0.022)    | 0.454 (0.151)    | -         |    12.04 | casey, Flayy, innocent, kisserek, olimp |
|           34 |     1008 | 2024-05-29 | UNiTY             | L   | 0.872      | -            | -                | -                | -         |   -15.94 | casey, Flayy, innocent, kisserek, olimp |
|           33 |     1095 | 2024-05-25 | kONO              | W   | 0.845      | 0.371        | -                | 0.595 (0.186)    | -         |     7.56 | casey, Flayy, innocent, kisserek, olimp |
|           32 |     1209 | 2024-05-21 | UNiTY             | L   | 0.818      | -            | -                | -                | -         |   -13.84 | casey, Flayy, innocent, kisserek, olimp |
|           31 |     1232 | 2024-05-20 | The Prodigies     | W   | 0.814      | -            | -                | -                | -         |     1.27 | casey, Flayy, innocent, kisserek, olimp |
|           30 |     1301 | 2024-05-18 | B8                | L   | 0.799      | -            | -                | -                | -         |    -8.93 | casey, Flayy, innocent, kisserek, olimp |
|           29 |     1331 | 2024-05-17 | Gaimin Gladiators | W   | 0.792      | 0.384        | 0.067 (0.020)    | 0.488 (0.149)    | -         |    14.02 | casey, Flayy, innocent, kisserek, olimp |
|           28 |     1823 | 2024-04-28 | Aurora            | L   | 0.664      | -            | -                | -                | -         |    -0.99 | casey, Flayy, innocent, kisserek, olimp |
|           27 |     1872 | 2024-04-26 | MIBR              | W   | 0.651      | 0.500        | 0.269 (0.087)    | 0.614 (0.200)    | 1 (0.651) |    19.52 | casey, Flayy, innocent, kisserek, olimp |
|           26 |     1874 | 2024-04-25 | Rooster           | W   | 0.650      | -            | -                | -                | 1 (0.650) |     5.07 | casey, Flayy, innocent, kisserek, olimp |
|           25 |     2027 | 2024-04-19 | brazylijski luz   | L   | 0.608      | -            | -                | -                | -         |   -14.10 | casey, Flayy, innocent, kisserek, olimp |
|           24 |     2206 | 2024-04-13 | Monte             | L   | 0.567      | -            | -                | -                | -         |    -7.54 | casey, Flayy, innocent, kisserek, olimp |
|           23 |     2338 | 2024-04-09 | B8                | W   | 0.541      | 0.500        | 0.246 (0.066)    | 1.000 (0.271)    | -         |    10.19 | casey, Flayy, innocent, kisserek, olimp |
|           22 |     2481 | 2024-04-04 | ALTERNATE aTTaX   | W   | 0.507      | 0.500        | -                | 0.644 (0.163)    | -         |     7.41 | casey, Flayy, innocent, kisserek, olimp |
|           21 |     2531 | 2024-04-03 | SINNERS           | L   | 0.499      | -            | -                | -                | -         |    -6.50 | casey, Flayy, innocent, kisserek, olimp |
|           20 |     2614 | 2024-03-28 | ex-Sprout         | W   | 0.461      | -            | -                | -                | -         |     0.81 | casey, Flayy, innocent, kisserek, olimp |
|           19 |     2647 | 2024-03-27 | B8                | L   | 0.455      | -            | -                | -                | -         |    -5.05 | casey, Flayy, innocent, kisserek, olimp |
|           18 |     2657 | 2024-03-27 | Sashi             | W   | 0.454      | 0.143        | 0.215 (0.014)    | -                | -         |     8.70 | casey, Flayy, innocent, kisserek, olimp |
|           17 |     2687 | 2024-03-25 | Aurora            | L   | 0.441      | -            | -                | -                | -         |    -0.47 | casey, Flayy, innocent, kisserek, olimp |
|           16 |     2882 | 2024-03-14 | brazylijski luz   | L   | 0.368      | -            | -                | -                | -         |    -8.98 | casey, Flayy, kisserek, olimp, SZPERO   |
|           15 |     3154 | 2024-03-04 | BLEED             | L   | 0.301      | -            | -                | -                | -         |    -4.68 | casey, Flayy, kisserek, olimp, sNx      |
|           14 |     3188 | 2024-03-03 | Sangal            | W   | 0.294      | 0.500        | 0.232 (0.034)    | 0.893 (0.131)    | -         |     5.78 | casey, Flayy, kisserek, olimp, sNx      |
|           13 |     3200 | 2024-03-02 | Aurora            | L   | 0.287      | -            | -                | -                | -         |    -0.30 | casey, Flayy, kisserek, olimp, sNx      |
|           12 |     3235 | 2024-02-29 | Sangal            | W   | 0.274      | 0.500        | 0.232 (0.032)    | -                | -         |     5.51 | casey, Flayy, kisserek, olimp, sNx      |
|           11 |     3726 | 2024-02-04 | Falcons           | L   | 0.108      | -            | -                | -                | -         |    -0.19 | casey, Flayy, kisserek, olimp, sNx      |
|           10 |     3763 | 2024-02-03 | FaZe              | L   | 0.100      | -            | -                | -                | -         |    -0.03 | casey, Flayy, kisserek, olimp, sNx      |
|            9 |     3785 | 2024-02-02 | M80               | W   | 0.094      | -            | -                | -                | 1 (0.094) |     2.24 | casey, Flayy, kisserek, olimp, sNx      |
|            8 |     3837 | 2024-01-31 | Eternal Fire      | L   | 0.081      | -            | -                | -                | -         |    -0.06 | casey, Flayy, kisserek, olimp, sNx      |
|            7 |     3842 | 2024-01-31 | Cloud9            | W   | 0.080      | -            | -                | -                | 1 (0.080) |     1.75 | casey, Flayy, kisserek, olimp, sNx      |
|            6 |     3882 | 2024-01-28 | 9 Pandas          | L   | 0.060      | -            | -                | -                | -         |    -0.81 | casey, Flayy, kisserek, olimp, sNx      |
|            5 |     3968 | 2024-01-23 | Viperio           | L   | 0.027      | -            | -                | -                | -         |    -0.81 | casey, Flayy, kisserek, olimp, sNx      |
|            4 |     3969 | 2024-01-23 | PERA              | L   | 0.027      | -            | -                | -                | -         |    -0.48 | casey, Flayy, kisserek, olimp, sNx      |
|            3 |     3989 | 2024-01-22 | Sampi             | L   | 0.021      | -            | -                | -                | -         |    -0.42 | casey, Flayy, kisserek, olimp, sNx      |
|            2 |     3994 | 2024-01-22 | ALTERNATE aTTaX   | W   | 0.020      | -            | -                | -                | -         |     0.34 | casey, Flayy, kisserek, olimp, sNx      |
|            1 |     3998 | 2024-01-22 | ex-Guild Eagles   | L   | 0.020      | -            | -                | -                | -         |    -0.45 | casey, Flayy, kisserek, olimp, sNx      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,747.69)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-13 |      0.975 | $1,089.00      | $1,061.40       |
| 2024-06-09 |      0.948 | $2,000.00      | $1,895.21       |
| 2024-05-18 |      0.801 | $2,000.00      | $1,601.39       |
| 2024-04-28 |      0.665 | $10,000.00     | $6,650.34       |
| 2024-02-11 |      0.154 | $10,000.00     | $1,539.35       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
