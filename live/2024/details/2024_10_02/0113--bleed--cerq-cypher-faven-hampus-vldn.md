### Roster Details<br />
Team Name: BLEED<br />
Roster: CeRq, CYPHER, faveN, hampus, VLDN<br />
Global Rank: [113](../../standings_global_2024_10_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_02.md)<br />
Regional Rank: [80]( ../../standings_europe_2024_10_02.md)<br />
<br />
Final Rank Value:  788.8<br />
<br />
Final Rank Value (788.8) = Starting Rank Value (749.6) + Head To Head Adjustments (39.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.365[<sup>1</sup>](#table2)
- Bounty Collected: 0.313[<sup>2</sup>](#table1)
- Opponent Network: 0.053[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.183<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 749.6
- 400 + ( ( 0.183 - 0.000 ) / ( 0.836 - 0.000 ) ) * 1600 = 749.6


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
|           26 |     4225 | 2024-05-11 | B8                | L   | 0.237      | -            | -                | -                | -         |    -1.42 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           25 |     4253 | 2024-05-09 | Sampi             | W   | 0.227      | 0.435        | 0.030 (0.003)    | 0.797 (0.079)    | 0 (0.000) |     5.11 | CYPHER, draken, faveN, hampus, VLDN |
|           24 |     4295 | 2024-05-07 | 1WIN              | L   | 0.213      | -            | -                | -                | -         |    -3.00 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           23 |     4319 | 2024-05-06 | Insilio           | W   | 0.205      | 0.396        | 0.039 (0.003)    | 0.731 (0.059)    | 0 (0.000) |     4.57 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           22 |     4385 | 2024-05-02 | AMKAL             | L   | 0.180      | -            | -                | -                | -         |    -1.05 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           21 |     4419 | 2024-05-01 | MOUZ NXT          | L   | 0.172      | -            | -                | -                | -         |    -1.74 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           20 |     4451 | 2024-04-30 | Permitta          | W   | 0.164      | 0.384        | 0.030 (0.002)    | 0.964 (0.061)    | 0 (0.000) |     3.49 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           19 |     4474 | 2024-04-28 | B8                | W   | 0.154      | 0.500        | 0.188 (0.014)    | 1.000 (0.077)    | 0 (0.000) |     3.95 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           18 |     4525 | 2024-04-26 | ex-Guild Eagles   | W   | 0.139      | -            | -                | -                | 0 (0.000) |     1.70 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           17 |     4533 | 2024-04-26 | DMS               | W   | 0.138      | 0.500        | -                | 0.587 (0.041)    | 0 (0.000) |     2.63 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           16 |     4573 | 2024-04-24 | Permitta          | W   | 0.126      | 0.435        | -                | 0.964 (0.053)    | 0 (0.000) |     2.78 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           15 |     4576 | 2024-04-24 | Nemiga            | L   | 0.126      | -            | -                | -                | -         |    -0.56 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           14 |     4592 | 2024-04-23 | B8                | W   | 0.119      | 0.500        | 0.188 (0.011)    | 1.000 (0.060)    | 0 (0.000) |     3.11 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           13 |     4601 | 2024-04-23 | Sashi             | L   | 0.118      | -            | -                | -                | -         |    -0.75 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           12 |     4610 | 2024-04-22 | Sangal            | W   | 0.112      | 0.500        | 0.218 (0.012)    | 0.645 (0.036)    | 0 (0.000) |     3.32 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           11 |     4612 | 2024-04-22 | Gaimin Gladiators | W   | 0.112      | -            | -                | -                | 0 (0.000) |     2.48 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           10 |     4627 | 2024-04-21 | Illuminar         | W   | 0.106      | -            | -                | -                | -         |     0.60 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            9 |     4633 | 2024-04-21 | BIG               | W   | 0.105      | 0.384        | 0.150 (0.006)    | -                | -         |     3.15 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            8 |     4657 | 2024-04-20 | MOUZ NXT          | W   | 0.099      | 0.500        | 0.074 (0.004)    | -                | -         |     2.21 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            7 |     4713 | 2024-04-19 | Sampi             | W   | 0.091      | 0.384        | -                | 0.797 (0.028)    | -         |     2.16 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            6 |     4770 | 2024-04-18 | ALTERNATE aTTaX   | W   | 0.084      | 0.500        | 0.084 (0.004)    | 0.847 (0.036)    | -         |     2.14 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            5 |     4794 | 2024-04-17 | 3DMAX             | L   | 0.078      | -            | -                | -                | -         |    -0.02 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            4 |     4822 | 2024-04-16 | KOI               | W   | 0.073      | -            | -                | -                | -         |     1.57 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            3 |     4834 | 2024-04-16 | SINNERS           | W   | 0.071      | 0.384        | 0.149 (0.004)    | -                | -         |     2.10 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            2 |     5012 | 2024-04-09 | Alliance          | W   | 0.026      | -            | -                | -                | -         |     0.47 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            1 |     5025 | 2024-04-09 | HAVU              | W   | 0.025      | -            | -                | -                | -         |     0.19 | CeRq, CYPHER, faveN, hampus, VLDN   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,008.83)
- Divide that value by the 5th highest value among all rosters ($328,015.08)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-18 |      0.286 | $500.00        | $143.18         |
| 2024-05-12 |      0.246 | $2,000.00      | $492.71         |
| 2024-04-24 |      0.126 | $25,000.00     | $3,139.93       |
| 2024-04-22 |      0.112 | $20,000.00     | $2,233.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
