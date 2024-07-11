### Roster Details<br />
Team Name: GamerLegion<br />
Roster: aNdu, FL4MUS, sl3nd, Snax, volt<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [32](../standings_global.md)<br />
Regional Rank: [22]( ../standings_europe.md)<br />
Final Rank Value:  1260.4<br />
<br />
Final Rank Value (1260.4) = Starting Rank Value (1271.5) + Head To Head Adjustments (-11.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.619[<sup>1</sup>](#table2)
- Bounty Collected: 0.485[<sup>2</sup>](#table1)
- Opponent Network: 0.295[<sup>2</sup>](#table1)
- LAN Wins: 0.254[<sup>2</sup>](#table1)

The average of these factors is 0.413<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1271.5
- 400 + ( ( 0.413 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1271.5


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
|           22 |      186 | 2024-06-15 | 5W                | L   | 1.000      | -            | -                | -                | -         |   -24.21 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           21 |      228 | 2024-06-14 | Endpoint          | W   | 1.000      | 0.450        | -                | 0.524 (0.236)    | 0 (0.000) |     3.27 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           20 |      259 | 2024-06-13 | Illuminar         | L   | 1.000      | -            | -                | -                | -         |   -26.64 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           19 |      432 | 2024-06-08 | 5W                | W   | 0.981      | 0.450        | 0.116 (0.051)    | -                | 0 (0.000) |     4.95 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           18 |      489 | 2024-06-07 | MOUZ NXT          | W   | 0.974      | 0.450        | 0.152 (0.066)    | 1.000 (0.438)    | 0 (0.000) |     9.72 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           17 |      550 | 2024-06-06 | Czech Republic    | W   | 0.967      | 0.450        | 0.104 (0.045)    | 0.493 (0.215)    | 0 (0.000) |     9.92 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           16 |      786 | 2024-05-31 | GUN5              | L   | 0.927      | -            | -                | -                | -         |   -24.99 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           15 |      995 | 2024-05-22 | Eternal Fire      | L   | 0.866      | -            | -                | -                | -         |    -2.26 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           14 |     1025 | 2024-05-21 | AMKAL             | W   | 0.861      | 0.769        | 0.135 (0.089)    | 0.559 (0.370)    | 0 (0.000) |    11.86 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           13 |     1136 | 2024-05-18 | fnatic            | W   | 0.838      | 0.769        | 0.298 (0.192)    | 0.623 (0.402)    | 0 (0.000) |    20.12 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           12 |     1157 | 2024-05-17 | Gaimin Gladiators | W   | 0.834      | 0.769        | 0.069 (0.044)    | 0.528 (0.338)    | 0 (0.000) |     8.41 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           11 |     1462 | 2024-05-07 | Virtus.pro        | L   | 0.767      | -            | -                | -                | -         |    -1.72 | aNdu, isak, sl3nd, Snax, volt   |
|           10 |     1536 | 2024-05-03 | ENCE              | W   | 0.739      | 0.889        | 0.216 (0.142)    | 0.399 (0.262)    | 1 (0.739) |    16.42 | aNdu, isak, sl3nd, Snax, volt   |
|            9 |     1553 | 2024-05-02 | FORZE             | W   | 0.734      | 0.889        | 0.095 (0.062)    | 0.293 (0.192)    | 1 (0.734) |     5.81 | aNdu, isak, sl3nd, Snax, volt   |
|            8 |     1585 | 2024-05-01 | MOUZ              | L   | 0.726      | -            | -                | -                | -         |    -0.43 | aNdu, isak, sl3nd, Snax, volt   |
|            7 |     1613 | 2024-04-30 | ENCE              | W   | 0.719      | 0.889        | 0.216 (0.138)    | 0.399 (0.255)    | 1 (0.719) |    16.77 | aNdu, isak, sl3nd, Snax, volt   |
|            6 |     1828 | 2024-04-20 | BIG               | L   | 0.653      | -            | -                | -                | -         |    -6.31 | aNdu, Goody, sl3nd, Snax, volt  |
|            5 |     1918 | 2024-04-18 | Sashi             | L   | 0.640      | -            | -                | -                | -         |   -13.73 | aNdu, isak, sl3nd, Snax, volt   |
|            4 |     1995 | 2024-04-16 | MOUZ NXT          | W   | 0.626      | 0.384        | 0.152 (0.037)    | 1.000 (0.241)    | -         |     5.95 | aNdu, isak, sl3nd, Snax, volt   |
|            3 |     2387 | 2024-04-02 | Monte             | L   | 0.534      | -            | -                | -                | -         |    -8.66 | aNdu, isak, sl3nd, Snax, volt   |
|            2 |     2396 | 2024-04-02 | FAVBET            | L   | 0.533      | -            | -                | -                | -         |   -15.49 | aNdu, isak, sl3nd, Snax, volt   |
|            1 |     2416 | 2024-04-01 | GUN5              | W   | 0.526      | -            | -                | -                | -         |     0.12 | aNdu, isak, sl3nd, Snax, volt   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($62,665.84)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.24) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-17 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-23 |      0.873 | $50,000.00     | $43,668.37      |
| 2024-05-12 |      0.800 | $17,500.00     | $13,997.47      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
