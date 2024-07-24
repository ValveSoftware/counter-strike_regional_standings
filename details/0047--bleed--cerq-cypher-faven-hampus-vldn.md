### Roster Details<br />
Team Name: BLEED<br />
Roster: CeRq, CYPHER, faveN, hampus, VLDN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [47](../standings_global.md)<br />
Regional Rank: [34]( ../standings_europe.md)<br />
Final Rank Value:  1087.6<br />
<br />
Final Rank Value (1087.6) = Starting Rank Value (995.0) + Head To Head Adjustments (92.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.527[<sup>1</sup>](#table2)
- Bounty Collected: 0.414[<sup>2</sup>](#table1)
- Opponent Network: 0.235[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.294<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 995.0
- 400 + ( ( 0.294 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 995.0


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
|           46 |     1846 | 2024-05-11 | B8                | L   | 0.704      | -            | -                | -                | -         |   -11.82 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           45 |     1874 | 2024-05-09 | Sampi             | W   | 0.694      | 0.435        | -                | 0.994 (0.300)    | 0 (0.000) |     6.56 | CYPHER, draken, faveN, hampus, VLDN |
|           44 |     1916 | 2024-05-07 | 1WIN              | L   | 0.680      | -            | -                | -                | -         |   -15.19 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           43 |     1940 | 2024-05-06 | Insilio           | W   | 0.672      | -            | -                | -                | 0 (0.000) |     6.76 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           42 |     2006 | 2024-05-02 | AMKAL             | L   | 0.647      | -            | -                | -                | -         |    -9.79 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           41 |     2040 | 2024-05-01 | MOUZ NXT          | L   | 0.639      | -            | -                | -                | -         |   -11.65 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           40 |     2072 | 2024-04-30 | Permitta          | W   | 0.631      | 0.384        | -                | 0.790 (0.192)    | 0 (0.000) |     5.54 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           39 |     2095 | 2024-04-28 | B8                | W   | 0.621      | 0.500        | 0.206 (0.064)    | 0.933 (0.290)    | 0 (0.000) |     7.90 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           38 |     2146 | 2024-04-26 | ex-Guild Eagles   | W   | 0.607      | -            | -                | -                | 0 (0.000) |     4.35 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           37 |     2154 | 2024-04-26 | DMS               | W   | 0.605      | -            | -                | -                | 0 (0.000) |     3.88 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           36 |     2194 | 2024-04-24 | Permitta          | W   | 0.593      | 0.435        | -                | 0.790 (0.204)    | 0 (0.000) |     6.26 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           35 |     2197 | 2024-04-24 | Nemiga            | L   | 0.593      | -            | -                | -                | -         |    -6.61 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           34 |     2213 | 2024-04-23 | B8                | W   | 0.586      | 0.500        | 0.206 (0.060)    | 0.933 (0.273)    | 0 (0.000) |     7.93 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           33 |     2222 | 2024-04-23 | Sashi             | L   | 0.585      | -            | -                | -                | -         |    -7.45 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           32 |     2231 | 2024-04-22 | Sangal            | W   | 0.579      | 0.500        | 0.195 (0.056)    | 0.860 (0.249)    | 0 (0.000) |     8.85 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           31 |     2233 | 2024-04-22 | Gaimin Gladiators | W   | 0.579      | 0.384        | 0.053 (0.012)    | -                | 0 (0.000) |     9.58 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           30 |     2248 | 2024-04-21 | Illuminar         | W   | 0.573      | -            | -                | -                | -         |     0.90 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           29 |     2254 | 2024-04-21 | BIG               | W   | 0.572      | 0.384        | 0.173 (0.038)    | -                | -         |    13.72 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           28 |     2278 | 2024-04-20 | MOUZ NXT          | W   | 0.566      | 0.500        | 0.169 (0.048)    | 1.000 (0.283)    | -         |     9.03 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           27 |     2334 | 2024-04-19 | Sampi             | W   | 0.558      | 0.384        | -                | 0.994 (0.213)    | -         |     6.07 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           26 |     2391 | 2024-04-18 | ALTERNATE aTTaX   | W   | 0.551      | 0.500        | -                | 0.638 (0.176)    | -         |     7.21 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           25 |     2415 | 2024-04-17 | 3DMAX             | L   | 0.545      | -            | -                | -                | -         |    -4.86 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           24 |     2443 | 2024-04-16 | KOI               | W   | 0.541      | 0.384        | 0.076 (0.016)    | -                | -         |    10.01 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           23 |     2455 | 2024-04-16 | SINNERS           | W   | 0.538      | -            | -                | -                | -         |    10.03 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           22 |     2633 | 2024-04-09 | Alliance          | W   | 0.493      | -            | -                | -                | -         |     4.54 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           21 |     2646 | 2024-04-09 | HAVU              | W   | 0.492      | -            | -                | -                | -         |     2.36 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           20 |     2727 | 2024-04-05 | BetBoom           | L   | 0.467      | -            | -                | -                | -         |    -1.11 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           19 |     2730 | 2024-04-05 | Alliance          | W   | 0.466      | -            | -                | -                | -         |     4.49 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           18 |     2771 | 2024-04-04 | Benched Heroes    | W   | 0.459      | -            | -                | -                | -         |     0.43 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           17 |     2777 | 2024-04-04 | BetBoom           | L   | 0.459      | -            | -                | -                | -         |    -1.07 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           16 |     2846 | 2024-04-02 | Passion UA        | W   | 0.447      | 0.384        | 0.163 (0.028)    | 1.000 (0.172)    | -         |     7.20 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           15 |     2869 | 2024-04-01 | Enterprise        | L   | 0.439      | -            | -                | -                | -         |    -8.64 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           14 |     3219 | 2024-03-13 | Sashi             | W   | 0.312      | -            | -                | -                | -         |     6.37 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           13 |     3320 | 2024-03-09 | Endpoint          | W   | 0.285      | -            | -                | -                | -         |     3.07 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           12 |     3387 | 2024-03-06 | fnatic            | L   | 0.267      | -            | -                | -                | -         |    -0.34 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           11 |     3433 | 2024-03-05 | BetBoom           | W   | 0.259      | 0.500        | 0.333 (0.043)    | -                | -         |     7.66 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           10 |     3442 | 2024-03-04 | Rebels            | W   | 0.254      | -            | -                | -                | -         |     4.34 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            9 |     3448 | 2024-03-04 | AURA              | W   | 0.252      | -            | -                | -                | -         |     0.48 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            8 |     3514 | 2024-03-01 | Young Ninjas      | W   | 0.233      | -            | -                | -                | -         |     1.67 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            7 |     3529 | 2024-02-29 | AURA              | W   | 0.225      | -            | -                | -                | -         |     0.44 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            6 |     3545 | 2024-02-28 | BIG               | W   | 0.218      | 0.500        | 0.173 (0.019)    | -                | -         |     5.82 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            5 |     3580 | 2024-02-26 | MOUZ NXT          | L   | 0.206      | -            | -                | -                | -         |    -2.64 | CeRq, faveN, hampus, lauNX, VLDN    |
|            4 |     3980 | 2024-02-08 | Passion UA        | W   | 0.085      | -            | -                | -                | -         |     1.70 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            3 |     4118 | 2024-02-01 | Into the Breach   | L   | 0.038      | -            | -                | -                | -         |    -1.07 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            2 |     4137 | 2024-01-31 | 9INE              | W   | 0.032      | -            | -                | -                | -         |     0.06 | CeRq, CYPHER, faveN, hampus, lauNX  |
|            1 |     4162 | 2024-01-29 | Metizport         | L   | 0.019      | -            | -                | -                | -         |    -0.35 | CeRq, CYPHER, faveN, hampus, lauNX  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($34,861.65)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.13) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-18 |      0.753 | $500.00        | $376.73         |
| 2024-05-12 |      0.713 | $2,000.00      | $1,426.92       |
| 2024-04-24 |      0.593 | $25,000.00     | $14,817.53      |
| 2024-04-22 |      0.579 | $20,000.00     | $11,575.08      |
| 2024-03-06 |      0.267 | $25,000.00     | $6,665.40       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
