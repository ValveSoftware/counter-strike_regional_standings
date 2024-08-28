### Roster Details<br />
Team Name: BLEED<br />
Roster: CeRq, CYPHER, faveN, hampus, VLDN<br />
Global Rank: [67](../../standings_global_2024_08_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_28.md)<br />
Regional Rank: [49]( ../../standings_europe_2024_08_28.md)<br />
<br />
Final Rank Value:  965.5<br />
<br />
Final Rank Value (965.5) = Starting Rank Value (881.4) + Head To Head Adjustments (84.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.453[<sup>1</sup>](#table2)
- Bounty Collected: 0.370[<sup>2</sup>](#table1)
- Opponent Network: 0.149[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.243<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 881.4
- 400 + ( ( 0.243 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 881.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           39 |     3091 | 2024-05-11 | B8                | L   | 0.472      | -            | -                | -                | -         |    -6.05 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           38 |     3119 | 2024-05-09 | Sampi             | W   | 0.461      | 0.435        | -                | 1.000 (0.200)    | 0 (0.000) |     6.11 | CYPHER, draken, faveN, hampus, VLDN |
|           37 |     3161 | 2024-05-07 | 1WIN              | L   | 0.447      | -            | -                | -                | -         |    -7.98 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           36 |     3185 | 2024-05-06 | Insilio           | W   | 0.439      | -            | -                | -                | 0 (0.000) |     5.89 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           35 |     3251 | 2024-05-02 | AMKAL             | L   | 0.414      | -            | -                | -                | -         |    -3.95 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           34 |     3285 | 2024-05-01 | MOUZ NXT          | L   | 0.406      | -            | -                | -                | -         |    -5.73 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           33 |     3317 | 2024-04-30 | Permitta          | W   | 0.398      | 0.384        | -                | 0.932 (0.143)    | 0 (0.000) |     5.86 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           32 |     3340 | 2024-04-28 | B8                | W   | 0.388      | 0.500        | 0.168 (0.033)    | 1.000 (0.194)    | 0 (0.000) |     7.03 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           31 |     3391 | 2024-04-26 | ex-Guild Eagles   | W   | 0.374      | -            | -                | -                | 0 (0.000) |     3.25 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           30 |     3399 | 2024-04-26 | DMS               | W   | 0.372      | -            | -                | -                | 0 (0.000) |     4.77 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           29 |     3439 | 2024-04-24 | Permitta          | W   | 0.360      | 0.435        | 0.036 (0.006)    | 0.932 (0.146)    | 0 (0.000) |     5.95 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           28 |     3442 | 2024-04-24 | Nemiga            | L   | 0.360      | -            | -                | -                | -         |    -2.33 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           27 |     3458 | 2024-04-23 | B8                | W   | 0.353      | 0.500        | 0.168 (0.030)    | 1.000 (0.177)    | 0 (0.000) |     6.75 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           26 |     3467 | 2024-04-23 | Sashi             | L   | 0.352      | -            | -                | -                | -         |    -3.09 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           25 |     3476 | 2024-04-22 | Sangal            | W   | 0.346      | 0.500        | 0.283 (0.049)    | 0.794 (0.138)    | 0 (0.000) |     8.36 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           24 |     3478 | 2024-04-22 | Gaimin Gladiators | W   | 0.346      | -            | -                | -                | 0 (0.000) |     5.12 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           23 |     3493 | 2024-04-21 | Illuminar         | W   | 0.340      | -            | -                | -                | -         |     0.98 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           22 |     3499 | 2024-04-21 | BIG               | W   | 0.339      | 0.384        | 0.172 (0.022)    | -                | -         |     9.28 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           21 |     3523 | 2024-04-20 | MOUZ NXT          | W   | 0.333      | 0.500        | 0.131 (0.022)    | 0.840 (0.140)    | -         |     6.52 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           20 |     3579 | 2024-04-19 | Sampi             | W   | 0.326      | 0.384        | -                | 1.000 (0.125)    | -         |     4.93 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           19 |     3636 | 2024-04-18 | ALTERNATE aTTaX   | W   | 0.318      | 0.500        | 0.035 (0.006)    | 0.707 (0.112)    | -         |     6.22 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           18 |     3660 | 2024-04-17 | 3DMAX             | L   | 0.312      | -            | -                | -                | -         |    -0.24 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           17 |     3688 | 2024-04-16 | KOI               | W   | 0.308      | 0.384        | 0.049 (0.006)    | -                | -         |     6.01 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           16 |     3700 | 2024-04-16 | SINNERS           | W   | 0.305      | 0.384        | 0.094 (0.011)    | 1.000 (0.117)    | -         |     8.12 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           15 |     3878 | 2024-04-09 | Alliance          | W   | 0.260      | -            | -                | -                | -         |     3.39 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           14 |     3891 | 2024-04-09 | HAVU              | W   | 0.259      | -            | -                | -                | -         |     1.16 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           13 |     3972 | 2024-04-05 | BetBoom           | L   | 0.234      | -            | -                | -                | -         |    -0.73 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           12 |     3975 | 2024-04-05 | Alliance          | W   | 0.233      | -            | -                | -                | -         |     3.11 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           11 |     4016 | 2024-04-04 | Benched Heroes    | W   | 0.226      | -            | -                | -                | -         |     0.44 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           10 |     4022 | 2024-04-04 | BetBoom           | L   | 0.226      | -            | -                | -                | -         |    -0.70 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            9 |     4091 | 2024-04-02 | Passion UA        | W   | 0.214      | 0.384        | 0.170 (0.014)    | -                | -         |     4.67 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            8 |     4114 | 2024-04-01 | Enterprise        | L   | 0.206      | -            | -                | -                | -         |    -3.14 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            7 |     4464 | 2024-03-13 | Sashi             | W   | 0.079      | -            | -                | -                | -         |     1.93 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            6 |     4565 | 2024-03-09 | Endpoint          | W   | 0.052      | -            | -                | -                | -         |     1.12 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            5 |     4632 | 2024-03-06 | fnatic            | L   | 0.034      | -            | -                | -                | -         |    -0.06 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            4 |     4678 | 2024-03-05 | BetBoom           | W   | 0.026      | -            | -                | -                | -         |     0.74 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            3 |     4687 | 2024-03-04 | Rebels            | W   | 0.021      | -            | -                | -                | -         |     0.39 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            2 |     4693 | 2024-03-04 | AURA              | W   | 0.019      | -            | -                | -                | -         |     0.06 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            1 |     4759 | 2024-03-01 | Young Ninjas      | W   | 0.000      | -            | -                | -                | -         |     0.00 | CeRq, CYPHER, faveN, hampus, VLDN   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($17,973.92)
- Divide that value by the 5th highest value among all rosters ($290,989.03)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-18 |      0.521 | $500.00        | $260.27         |
| 2024-05-12 |      0.481 | $2,000.00      | $961.05         |
| 2024-04-24 |      0.360 | $25,000.00     | $8,994.17       |
| 2024-04-22 |      0.346 | $20,000.00     | $6,916.39       |
| 2024-03-06 |      0.034 | $25,000.00     | $842.04         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
