### Roster Details<br />
Team Name: GamerLegion<br />
Roster: aNdu, FL4MUS, sl3nd, volt, ztr<br />
Global Rank: [39](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [29]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1159.0<br />
<br />
Final Rank Value (1159.0) = Starting Rank Value (1155.3) + Head To Head Adjustments (3.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.571[<sup>1</sup>](#table2)
- Bounty Collected: 0.457[<sup>2</sup>](#table1)
- Opponent Network: 0.230[<sup>2</sup>](#table1)
- LAN Wins: 0.206[<sup>2</sup>](#table1)

The average of these factors is 0.366<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1155.3
- 400 + ( ( 0.366 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1155.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |       53 | 2024-07-30 | Falcons           | L   | 1.000      | -            | -                | -                | -         |    -5.14 | aNdu, FL4MUS, sl3nd, volt, ztr  |
|           23 |       89 | 2024-07-29 | Vitality          | L   | 1.000      | -            | -                | -                | -         |    -0.72 | aNdu, FL4MUS, sl3nd, volt, ztr  |
|           22 |      880 | 2024-06-15 | 5W                | L   | 0.893      | -            | -                | -                | -         |   -20.48 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           21 |      922 | 2024-06-14 | Endpoint          | W   | 0.886      | 0.450        | -                | 0.523 (0.208)    | 0 (0.000) |     4.26 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           20 |      953 | 2024-06-13 | Illuminar         | L   | 0.880      | -            | -                | -                | -         |   -23.06 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           19 |     1126 | 2024-06-08 | 5W                | W   | 0.847      | 0.450        | 0.083 (0.031)    | -                | 0 (0.000) |     5.55 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           18 |     1183 | 2024-06-07 | MOUZ NXT          | W   | 0.840      | 0.450        | 0.141 (0.053)    | 1.000 (0.378)    | 0 (0.000) |    10.41 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           17 |     1244 | 2024-06-06 | ECLOT             | W   | 0.833      | 0.450        | 0.065 (0.024)    | 0.502 (0.188)    | 0 (0.000) |     9.56 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           16 |     1480 | 2024-05-31 | GUN5              | L   | 0.793      | -            | -                | -                | -         |   -20.24 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           15 |     1689 | 2024-05-22 | Eternal Fire      | L   | 0.732      | -            | -                | -                | -         |    -1.30 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           14 |     1719 | 2024-05-21 | AMKAL             | W   | 0.727      | 0.769        | 0.132 (0.074)    | 0.484 (0.270)    | 0 (0.000) |    12.09 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           13 |     1830 | 2024-05-18 | fnatic            | W   | 0.704      | 0.769        | 0.374 (0.203)    | 0.633 (0.343)    | 0 (0.000) |    19.19 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           12 |     1851 | 2024-05-17 | Gaimin Gladiators | W   | 0.700      | 0.769        | 0.040 (0.021)    | 0.363 (0.195)    | 0 (0.000) |     6.75 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           11 |     2156 | 2024-05-07 | Virtus.pro        | L   | 0.633      | -            | -                | -                | -         |    -0.95 | aNdu, isak, sl3nd, Snax, volt   |
|           10 |     2230 | 2024-05-03 | ENCE              | W   | 0.605      | 0.889        | 0.175 (0.094)    | 0.404 (0.217)    | 1 (0.605) |    15.49 | aNdu, isak, sl3nd, Snax, volt   |
|            9 |     2247 | 2024-05-02 | FORZE             | W   | 0.600      | 0.889        | 0.060 (0.032)    | 0.189 (0.101)    | 1 (0.600) |     5.01 | aNdu, isak, sl3nd, Snax, volt   |
|            8 |     2279 | 2024-05-01 | MOUZ              | L   | 0.592      | -            | -                | -                | -         |    -0.29 | aNdu, isak, sl3nd, Snax, volt   |
|            7 |     2307 | 2024-04-30 | ENCE              | W   | 0.585      | 0.889        | 0.175 (0.091)    | 0.404 (0.210)    | 1 (0.585) |    15.46 | aNdu, isak, sl3nd, Snax, volt   |
|            6 |     2522 | 2024-04-20 | BIG               | L   | 0.519      | -            | -                | -                | -         |    -6.01 | aNdu, Goody, sl3nd, Snax, volt  |
|            5 |     2612 | 2024-04-18 | Sashi             | L   | 0.506      | -            | -                | -                | -         |    -8.40 | aNdu, isak, sl3nd, Snax, volt   |
|            4 |     2689 | 2024-04-16 | MOUZ NXT          | W   | 0.492      | 0.384        | 0.141 (0.027)    | 1.000 (0.189)    | -         |     6.03 | aNdu, isak, sl3nd, Snax, volt   |
|            3 |     3081 | 2024-04-02 | Monte             | L   | 0.400      | -            | -                | -                | -         |    -8.64 | aNdu, isak, sl3nd, Snax, volt   |
|            2 |     3090 | 2024-04-02 | FAVBET            | L   | 0.399      | -            | -                | -                | -         |   -11.13 | aNdu, isak, sl3nd, Snax, volt   |
|            1 |     3110 | 2024-04-01 | GUN5              | W   | 0.392      | -            | -                | -                | -         |     0.18 | aNdu, isak, sl3nd, Snax, volt   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($58,137.42)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.18) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-31 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-06-17 |      0.905 | $5,000.00      | $4,524.88       |
| 2024-05-23 |      0.739 | $50,000.00     | $36,962.22      |
| 2024-05-12 |      0.666 | $17,500.00     | $11,650.32      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
