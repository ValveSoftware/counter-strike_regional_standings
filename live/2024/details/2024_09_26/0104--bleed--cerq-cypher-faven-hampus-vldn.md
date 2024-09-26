### Roster Details<br />
Team Name: BLEED<br />
Roster: CeRq, CYPHER, faveN, hampus, VLDN<br />
Global Rank: [104](../../standings_global_2024_09_26.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_26.md)<br />
Regional Rank: [73]( ../../standings_europe_2024_09_26.md)<br />
<br />
Final Rank Value:  821.1<br />
<br />
Final Rank Value (821.1) = Starting Rank Value (769.4) + Head To Head Adjustments (51.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.381[<sup>1</sup>](#table2)
- Bounty Collected: 0.327[<sup>2</sup>](#table1)
- Opponent Network: 0.074[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.195<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 769.4
- 400 + ( ( 0.195 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 769.4


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
|           32 |     3992 | 2024-05-11 | B8                | L   | 0.278      | -            | -                | -                | -         |    -1.93 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           31 |     4020 | 2024-05-09 | Sampi             | W   | 0.268      | 0.435        | 0.032 (0.004)    | 0.942 (0.109)    | 0 (0.000) |     5.81 | CYPHER, draken, faveN, hampus, VLDN |
|           30 |     4062 | 2024-05-07 | 1WIN              | L   | 0.254      | -            | -                | -                | -         |    -3.76 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           29 |     4086 | 2024-05-06 | Insilio           | W   | 0.245      | 0.396        | 0.032 (0.003)    | 0.804 (0.078)    | 0 (0.000) |     5.19 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           28 |     4152 | 2024-05-02 | AMKAL             | L   | 0.221      | -            | -                | -                | -         |    -1.38 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           27 |     4186 | 2024-05-01 | MOUZ NXT          | L   | 0.212      | -            | -                | -                | -         |    -2.28 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           26 |     4218 | 2024-04-30 | Permitta          | W   | 0.205      | 0.384        | 0.023 (0.002)    | 1.000 (0.079)    | 0 (0.000) |     4.06 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           25 |     4241 | 2024-04-28 | B8                | W   | 0.194      | 0.500        | 0.195 (0.019)    | 1.000 (0.097)    | 0 (0.000) |     4.83 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           24 |     4292 | 2024-04-26 | ex-Guild Eagles   | W   | 0.180      | -            | -                | -                | 0 (0.000) |     2.05 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           23 |     4300 | 2024-04-26 | DMS               | W   | 0.179      | 0.500        | -                | 0.636 (0.057)    | 0 (0.000) |     3.20 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           22 |     4340 | 2024-04-24 | Permitta          | W   | 0.167      | 0.435        | -                | 1.000 (0.073)    | 0 (0.000) |     3.48 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           21 |     4343 | 2024-04-24 | Nemiga            | L   | 0.167      | -            | -                | -                | -         |    -0.80 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           20 |     4359 | 2024-04-23 | B8                | W   | 0.160      | 0.500        | 0.195 (0.016)    | 1.000 (0.080)    | 0 (0.000) |     4.05 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           19 |     4368 | 2024-04-23 | Sashi             | L   | 0.159      | -            | -                | -                | -         |    -1.05 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           18 |     4377 | 2024-04-22 | Sangal            | W   | 0.153      | 0.500        | 0.222 (0.017)    | 0.761 (0.058)    | 0 (0.000) |     4.48 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           17 |     4379 | 2024-04-22 | Gaimin Gladiators | W   | 0.153      | -            | -                | -                | 0 (0.000) |     3.24 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           16 |     4394 | 2024-04-21 | Illuminar         | W   | 0.147      | -            | -                | -                | -         |     0.75 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           15 |     4400 | 2024-04-21 | BIG               | W   | 0.146      | 0.384        | 0.159 (0.009)    | -                | -         |     4.38 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           14 |     4424 | 2024-04-20 | MOUZ NXT          | W   | 0.140      | 0.500        | 0.081 (0.006)    | -                | -         |     3.08 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           13 |     4480 | 2024-04-19 | Sampi             | W   | 0.132      | 0.384        | -                | 0.942 (0.048)    | -         |     3.07 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           12 |     4537 | 2024-04-18 | ALTERNATE aTTaX   | W   | 0.125      | 0.500        | 0.087 (0.005)    | 0.904 (0.056)    | -         |     3.14 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           11 |     4561 | 2024-04-17 | 3DMAX             | L   | 0.119      | -            | -                | -                | -         |    -0.04 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           10 |     4589 | 2024-04-16 | KOI               | W   | 0.114      | -            | -                | -                | -         |     2.40 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            9 |     4601 | 2024-04-16 | SINNERS           | W   | 0.112      | 0.384        | 0.151 (0.006)    | -                | -         |     3.30 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            8 |     4779 | 2024-04-09 | Alliance          | W   | 0.067      | -            | -                | -                | -         |     1.17 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            7 |     4792 | 2024-04-09 | HAVU              | W   | 0.066      | -            | -                | -                | -         |     0.47 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            6 |     4873 | 2024-04-05 | BetBoom           | L   | 0.040      | -            | -                | -                | -         |    -0.15 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            5 |     4876 | 2024-04-05 | Alliance          | W   | 0.040      | -            | -                | -                | -         |     0.69 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            4 |     4917 | 2024-04-04 | Benched Heroes    | W   | 0.033      | -            | -                | -                | -         |     0.12 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            3 |     4923 | 2024-04-04 | BetBoom           | L   | 0.032      | -            | -                | -                | -         |    -0.12 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            2 |     4992 | 2024-04-02 | Passion UA        | W   | 0.020      | -            | -                | -                | -         |     0.50 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            1 |     5015 | 2024-04-01 | Enterprise        | L   | 0.013      | -            | -                | -                | -         |    -0.24 | CeRq, CYPHER, faveN, hampus, VLDN   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,952.55)
- Divide that value by the 5th highest value among all rosters ($332,851.90)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-18 |      0.327 | $500.00        | $163.64         |
| 2024-05-12 |      0.287 | $2,000.00      | $574.55         |
| 2024-04-24 |      0.167 | $25,000.00     | $4,162.95       |
| 2024-04-22 |      0.153 | $20,000.00     | $3,051.41       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
