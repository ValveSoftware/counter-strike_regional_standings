### Roster Details<br />
Team Name: BLEED<br />
Roster: CeRq, CYPHER, faveN, hampus, VLDN<br />
Global Rank: [133](../../standings_global_2024_10_09.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_09.md)<br />
Regional Rank: [92]( ../../standings_europe_2024_10_09.md)<br />
<br />
Final Rank Value:  752.9<br />
<br />
Final Rank Value (752.9) = Starting Rank Value (726.4) + Head To Head Adjustments (26.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.345[<sup>1</sup>](#table2)
- Bounty Collected: 0.297[<sup>2</sup>](#table1)
- Opponent Network: 0.034[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.169<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 726.4
- 400 + ( ( 0.169 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 726.4


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
|           24 |     4445 | 2024-05-11 | B8                | L   | 0.192      | -            | -                | -                | -         |    -0.93 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           23 |     4473 | 2024-05-09 | Sampi             | W   | 0.181      | 0.435        | 0.049 (0.004)    | 0.716 (0.056)    | 0 (0.000) |     4.68 | CYPHER, draken, faveN, hampus, VLDN |
|           22 |     4515 | 2024-05-07 | 1WIN              | L   | 0.167      | -            | -                | -                | -         |    -2.18 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           21 |     4539 | 2024-05-06 | Insilio           | W   | 0.159      | 0.396        | 0.040 (0.003)    | 0.678 (0.043)    | 0 (0.000) |     3.77 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           20 |     4605 | 2024-05-02 | AMKAL             | L   | 0.134      | -            | -                | -                | -         |    -0.70 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           19 |     4639 | 2024-05-01 | MOUZ NXT          | L   | 0.126      | -            | -                | -                | -         |    -1.15 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           18 |     4671 | 2024-04-30 | Permitta          | W   | 0.119      | 0.384        | 0.036 (0.002)    | 0.918 (0.042)    | 0 (0.000) |     2.76 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           17 |     4694 | 2024-04-28 | B8                | W   | 0.108      | 0.500        | 0.194 (0.010)    | 1.000 (0.054)    | 0 (0.000) |     2.90 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           16 |     4745 | 2024-04-26 | ex-Guild Eagles   | W   | 0.094      | -            | -                | -                | 0 (0.000) |     1.24 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           15 |     4753 | 2024-04-26 | DMS               | W   | 0.093      | 0.500        | -                | 0.541 (0.025)    | 0 (0.000) |     1.86 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           14 |     4793 | 2024-04-24 | Permitta          | W   | 0.081      | 0.435        | -                | 0.918 (0.032)    | 0 (0.000) |     1.92 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           13 |     4796 | 2024-04-24 | Nemiga            | L   | 0.080      | -            | -                | -                | -         |    -0.31 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           12 |     4812 | 2024-04-23 | B8                | W   | 0.074      | 0.500        | 0.194 (0.007)    | 1.000 (0.037)    | 0 (0.000) |     1.99 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           11 |     4821 | 2024-04-23 | Sashi             | L   | 0.072      | -            | -                | -                | -         |    -0.41 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           10 |     4830 | 2024-04-22 | Sangal            | W   | 0.067      | 0.500        | 0.218 (0.007)    | 0.577 (0.019)    | 0 (0.000) |     2.00 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            9 |     4832 | 2024-04-22 | Gaimin Gladiators | W   | 0.066      | -            | -                | -                | 0 (0.000) |     1.53 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            8 |     4847 | 2024-04-21 | Illuminar         | W   | 0.061      | -            | -                | -                | -         |     0.86 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            7 |     4853 | 2024-04-21 | BIG               | W   | 0.059      | 0.384        | 0.213 (0.005)    | -                | -         |     1.84 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            6 |     4877 | 2024-04-20 | MOUZ NXT          | W   | 0.054      | 0.500        | 0.070 (0.002)    | 0.478 (0.013)    | -         |     1.23 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            5 |     4933 | 2024-04-19 | Sampi             | W   | 0.046      | -            | -                | -                | -         |     1.21 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            4 |     4990 | 2024-04-18 | ALTERNATE aTTaX   | W   | 0.038      | 0.500        | 0.084 (0.002)    | 0.812 (0.016)    | -         |     1.01 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            3 |     5014 | 2024-04-17 | 3DMAX             | L   | 0.033      | -            | -                | -                | -         |    -0.01 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            2 |     5042 | 2024-04-16 | KOI               | W   | 0.028      | -            | -                | -                | -         |     0.62 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            1 |     5054 | 2024-04-16 | SINNERS           | W   | 0.025      | 0.384        | 0.156 (0.002)    | -                | -         |     0.75 | CeRq, CYPHER, faveN, hampus, VLDN   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,844.93)
- Divide that value by the 5th highest value among all rosters ($304,769.86)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-18 |      0.241 | $500.00        | $120.40         |
| 2024-05-12 |      0.201 | $2,000.00      | $401.60         |
| 2024-04-24 |      0.080 | $25,000.00     | $2,001.04       |
| 2024-04-22 |      0.066 | $20,000.00     | $1,321.88       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
