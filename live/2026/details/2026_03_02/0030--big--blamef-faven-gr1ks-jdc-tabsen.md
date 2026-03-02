### Roster Details<br />
Team Name: BIG<br />
Roster: blameF, faveN, gr1ks, JDC, tabseN<br />
Global Rank: [30](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [23]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  1340.1<br />
<br />
Final Rank Value (1340.1) = Starting Rank Value (1369.3) + Head To Head Adjustments (-29.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.541[<sup>1</sup>](#table2)
- Bounty Collected: 0.363[<sup>2</sup>](#table1)
- Opponent Network: 0.254[<sup>2</sup>](#table1)
- LAN Wins: 0.892[<sup>2</sup>](#table1)

The average of these factors is 0.512<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1369.3
- 400 + ( ( 0.512 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 1369.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           52 |     1200 | 2026-01-30 | Nemiga           | L   | 0.993      | -            | -                | -                | -         |   -19.74 | blameF, gr1ks, JDC, prosus, tabseN  |
|           51 |     1219 | 2026-01-29 | BET-M            | W   | 0.988      | 0.435        | 0.014 (0.006)    | 0.717 (0.308)    | -         |     6.73 | blameF, gr1ks, JDC, prosus, tabseN  |
|           50 |     1247 | 2026-01-28 | ARCRED           | W   | 0.980      | 0.435        | -                | 0.942 (0.401)    | -         |     5.02 | blameF, gr1ks, JDC, prosus, tabseN  |
|           49 |     1317 | 2026-01-25 | HAVU             | W   | 0.959      | 0.333        | -                | 0.531 (0.170)    | 1 (0.959) |     3.96 | blameF, faveN, gr1ks, JDC, tabseN   |
|           48 |     1340 | 2026-01-24 | Alliance         | W   | 0.954      | 0.333        | 0.124 (0.039)    | 0.943 (0.300)    | 1 (0.954) |    13.29 | blameF, faveN, gr1ks, JDC, tabseN   |
|           47 |     1356 | 2026-01-24 | Johnny Speeds    | W   | 0.952      | 0.333        | 0.021 (0.007)    | 0.910 (0.289)    | 1 (0.952) |     7.67 | blameF, faveN, gr1ks, JDC, tabseN   |
|           46 |     1411 | 2026-01-23 | Luleflames       | W   | 0.945      | -            | -                | -                | 1 (0.945) |     0.17 | blameF, faveN, gr1ks, JDC, tabseN   |
|           45 |     1414 | 2026-01-23 | Lilmix           | L   | 0.945      | -            | -                | -                | -         |   -28.45 | blameF, faveN, gr1ks, JDC, tabseN   |
|           44 |     1540 | 2026-01-18 | Betclic          | W   | 0.914      | 0.341        | -                | 0.481 (0.150)    | 1 (0.914) |     8.44 | blameF, faveN, gr1ks, JDC, tabseN   |
|           43 |     1545 | 2026-01-18 | Rebels           | W   | 0.913      | -            | -                | -                | 1 (0.913) |     6.03 | blameF, faveN, gr1ks, JDC, tabseN   |
|           42 |     1583 | 2026-01-17 | MANA             | W   | 0.907      | -            | -                | -                | 1 (0.907) |     1.93 | blameF, faveN, gr1ks, JDC, tabseN   |
|           41 |     1621 | 2026-01-16 | HYPERSPIRIT      | W   | 0.901      | -            | -                | -                | 1 (0.901) |     1.30 | blameF, faveN, gr1ks, JDC, tabseN   |
|           40 |     1637 | 2026-01-16 | EXSAD            | W   | 0.900      | -            | -                | -                | 1 (0.900) |     0.19 | blameF, faveN, gr1ks, JDC, tabseN   |
|           39 |     1988 | 2025-12-16 | SPARTA           | L   | 0.693      | -            | -                | -                | -         |   -19.57 | FreeZe, gr1ks, JDC, prosus, tabseN  |
|           38 |     1999 | 2025-12-14 | magic            | W   | 0.681      | 0.435        | 0.136 (0.040)    | 0.869 (0.257)    | -         |     5.02 | FreeZe, gr1ks, JDC, prosus, tabseN  |
|           37 |     2001 | 2025-12-14 | 9INE             | W   | 0.680      | 0.435        | 0.072 (0.021)    | 0.699 (0.206)    | -         |     9.36 | FreeZe, gr1ks, JDC, prosus, tabseN  |
|           36 |     2008 | 2025-12-13 | Oramond          | W   | 0.674      | 0.435        | 0.102 (0.030)    | 0.867 (0.254)    | -         |     4.92 | FreeZe, gr1ks, JDC, prosus, tabseN  |
|           35 |     2026 | 2025-12-12 | Sangal           | W   | 0.667      | 0.435        | 0.025 (0.007)    | 0.693 (0.201)    | -         |     3.70 | FreeZe, gr1ks, JDC, prosus, tabseN  |
|           34 |     2507 | 2025-11-21 | Leo              | L   | 0.527      | -            | -                | -                | -         |   -15.33 | FreeZe, gr1ks, JDC, prosus, tabseN  |
|           33 |     2819 | 2025-11-09 | Mousquetaires    | W   | 0.446      | -            | -                | -                | 1 (0.446) |     0.56 | FreeZe, JBOEN, JDC, prosus, tabseN  |
|           32 |     2884 | 2025-11-08 | Arise            | W   | 0.437      | -            | -                | -                | -         |     0.27 | FreeZe, JBOEN, JDC, prosus, tabseN  |
|           31 |     2966 | 2025-11-07 | Nemesis SEA      | W   | 0.432      | -            | -                | -                | -         |     0.13 | FreeZe, JBOEN, JDC, prosus, tabseN  |
|           30 |     3104 | 2025-11-02 | M80              | L   | 0.401      | -            | -                | -                | -         |    -6.95 | FreeZe, JBOEN, JDC, prosus, tabseN  |
|           29 |     3123 | 2025-11-01 | Imperial         | W   | 0.396      | 0.333        | 0.080 (0.011)    | -                | -         |     4.58 | FreeZe, JBOEN, JDC, prosus, tabseN  |
|           28 |     3132 | 2025-11-01 | FlyQuest RED     | W   | 0.394      | -            | -                | -                | -         |     0.36 | FreeZe, JBOEN, JDC, prosus, tabseN  |
|           27 |     3495 | 2025-10-23 | Mousquetaires    | W   | 0.333      | -            | -                | -                | -         |     0.45 | FreeZe, gr1ks, JDC, prosus, tabseN  |
|           26 |     3532 | 2025-10-22 | BC.Game          | W   | 0.325      | -            | -                | -                | -         |     0.47 | FreeZe, gr1ks, JDC, prosus, tabseN  |
|           25 |     3543 | 2025-10-21 | AM               | W   | 0.319      | -            | -                | -                | -         |     1.25 | FreeZe, gr1ks, JDC, prosus, tabseN  |
|           24 |     3554 | 2025-10-21 | premdesant       | W   | 0.318      | -            | -                | -                | -         |     0.08 | FreeZe, gr1ks, JDC, prosus, tabseN  |
|           23 |     3589 | 2025-10-18 | 1win             | L   | 0.300      | -            | -                | -                | -         |    -7.69 | FreeZe, gr1ks, JDC, kyuubii, tabseN |
|           22 |     4114 | 2025-10-04 | fnatic           | L   | 0.209      | -            | -                | -                | -         |    -3.75 | hyped, JDC, Krimbo, prosus, tabseN  |
|           21 |     4133 | 2025-10-04 | KOLESIE          | W   | 0.206      | 0.333        | 0.088 (0.006)    | -                | -         |     2.23 | hyped, JDC, Krimbo, prosus, tabseN  |
|           20 |     4270 | 2025-09-30 | EYEBALLERS       | L   | 0.181      | -            | -                | -                | -         |    -3.75 | hyped, JDC, Krimbo, prosus, tabseN  |
|           19 |     4278 | 2025-09-30 | MOUZ NXT         | W   | 0.180      | -            | -                | -                | -         |     2.48 | hyped, JDC, Krimbo, prosus, tabseN  |
|           18 |     4285 | 2025-09-30 | OG               | W   | 0.179      | -            | -                | -                | -         |     0.49 | hyped, JDC, Krimbo, prosus, tabseN  |
|           17 |     4293 | 2025-09-30 | Passion UA       | L   | 0.179      | -            | -                | -                | -         |    -3.47 | hyped, JDC, Krimbo, prosus, tabseN  |
|           16 |     4305 | 2025-09-30 | AaB              | W   | 0.178      | -            | -                | -                | -         |     0.14 | hyped, JDC, Krimbo, prosus, tabseN  |
|           15 |     4400 | 2025-09-27 | Phantom          | L   | 0.161      | -            | -                | -                | -         |    -3.66 | hyped, JDC, Krimbo, prosus, tabseN  |
|           14 |     4419 | 2025-09-27 | Phantom          | W   | 0.160      | -            | -                | -                | -         |     0.11 | hyped, JDC, Krimbo, prosus, tabseN  |
|           13 |     4441 | 2025-09-27 | Monte            | L   | 0.157      | -            | -                | -                | -         |    -2.34 | hyped, JDC, Krimbo, prosus, tabseN  |
|           12 |     4475 | 2025-09-26 | SIXSEVEN         | W   | 0.152      | -            | -                | -                | -         |     0.24 | hyped, JDC, Krimbo, prosus, tabseN  |
|           11 |     4490 | 2025-09-26 | ATOMIK           | W   | 0.151      | -            | -                | -                | -         |     0.02 | hyped, JDC, Krimbo, prosus, tabseN  |
|           10 |     4581 | 2025-09-22 | Friendly Campers | L   | 0.127      | -            | -                | -                | -         |    -3.06 | hyped, JDC, Krimbo, prosus, tabseN  |
|            9 |     4610 | 2025-09-21 | Friendly Campers | L   | 0.119      | -            | -                | -                | -         |    -2.92 | hyped, JDC, Krimbo, prosus, tabseN  |
|            8 |     4628 | 2025-09-20 | KOLESIE          | W   | 0.114      | -            | -                | -                | -         |     1.19 | hyped, JDC, Krimbo, prosus, tabseN  |
|            7 |     4668 | 2025-09-19 | RUBY             | W   | 0.106      | -            | -                | -                | -         |     0.12 | hyped, JDC, Krimbo, prosus, tabseN  |
|            6 |     4822 | 2025-09-14 | ECSTATIC         | L   | 0.073      | -            | -                | -                | -         |    -1.11 | hyped, JDC, Krimbo, prosus, tabseN  |
|            5 |     4859 | 2025-09-13 | Inner Circle     | W   | 0.068      | -            | -                | -                | -         |     0.42 | hyped, JDC, Krimbo, prosus, tabseN  |
|            4 |     4979 | 2025-09-11 | OG               | L   | 0.053      | -            | -                | -                | -         |    -1.55 | hyped, JDC, Krimbo, prosus, tabseN  |
|            3 |     5083 | 2025-09-09 | BC.Game          | W   | 0.040      | 0.729        | 0.224 (0.006)    | -                | -         |     0.80 | hyped, JDC, Krimbo, prosus, tabseN  |
|            2 |     5225 | 2025-09-04 | AaB              | W   | 0.007      | -            | -                | -                | -         |     0.01 | hyped, JDC, Krimbo, prosus, tabseN  |
|            1 |     5229 | 2025-09-04 | Friendly Campers | W   | 0.006      | -            | -                | -                | -         |     0.04 | hyped, JDC, Krimbo, prosus, tabseN  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($47,544.96)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-30 |      0.994 | $5,000.00      | $4,971.39       |
| 2026-01-25 |      0.959 | $7,000.00      | $6,715.62       |
| 2026-01-18 |      0.914 | $5,818.00      | $5,318.63       |
| 2025-12-14 |      0.681 | $22,000.00     | $14,984.09      |
| 2025-11-09 |      0.446 | $30,000.00     | $13,368.74      |
| 2025-11-02 |      0.401 | $3,000.00      | $1,202.45       |
| 2025-10-19 |      0.307 | $1,000.00      | $307.36         |
| 2025-09-21 |      0.120 | $5,000.00      | $602.12         |
| 2025-09-14 |      0.075 | $1,000.00      | $74.55          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
