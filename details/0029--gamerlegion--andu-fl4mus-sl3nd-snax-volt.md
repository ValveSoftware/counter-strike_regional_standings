### Roster Details<br />
Team Name: GamerLegion<br />
Roster: aNdu, FL4MUS, sl3nd, Snax, volt<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [29](../standings_global.md)<br />
Regional Rank: [20]( ../standings_europe.md)<br />
Final Rank Value:  1275.6<br />
<br />
Final Rank Value (1275.6) = Starting Rank Value (1292.0) + Head To Head Adjustments (-16.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.616[<sup>1</sup>](#table2)
- Bounty Collected: 0.504[<sup>2</sup>](#table1)
- Opponent Network: 0.359[<sup>2</sup>](#table1)
- LAN Wins: 0.277[<sup>2</sup>](#table1)

The average of these factors is 0.439<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1292.0
- 400 + ( ( 0.439 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1292.0


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
|           22 |       50 | 2024-06-15 | 5W                | L   | 1.000      | -            | -                | -                | -         |   -25.31 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           21 |       92 | 2024-06-14 | Endpoint          | W   | 1.000      | 0.450        | -                | 0.490 (0.221)    | 0 (0.000) |     2.94 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           20 |      123 | 2024-06-13 | Illuminar         | L   | 1.000      | -            | -                | -                | -         |   -28.75 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           19 |      296 | 2024-06-08 | 5W                | W   | 1.000      | 0.450        | 0.100 (0.045)    | -                | 0 (0.000) |     4.10 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           18 |      353 | 2024-06-07 | MOUZ NXT          | W   | 1.000      | 0.450        | 0.158 (0.071)    | 1.000 (0.450)    | 0 (0.000) |     9.46 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           17 |      414 | 2024-06-06 | ECLOT             | W   | 1.000      | 0.450        | 0.107 (0.048)    | 0.478 (0.215)    | 0 (0.000) |     8.57 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           16 |      652 | 2024-05-31 | GUN5              | L   | 1.000      | -            | -                | -                | -         |   -27.68 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           15 |      861 | 2024-05-22 | Eternal Fire      | L   | 1.000      | -            | -                | -                | -         |    -2.32 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           14 |      891 | 2024-05-21 | AMKAL             | W   | 1.000      | 0.769        | 0.139 (0.107)    | 0.613 (0.472)    | 0 (0.000) |    14.96 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           13 |     1002 | 2024-05-18 | fnatic            | W   | 0.994      | 0.769        | 0.290 (0.221)    | 0.666 (0.509)    | 0 (0.000) |    20.94 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           12 |     1023 | 2024-05-17 | Gaimin Gladiators | W   | 0.989      | 0.769        | 0.076 (0.058)    | 0.632 (0.481)    | 0 (0.000) |    10.26 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           11 |     1328 | 2024-05-07 | Virtus.pro        | L   | 0.923      | -            | -                | -                | -         |    -2.15 | aNdu, isak, sl3nd, Snax, volt   |
|           10 |     1402 | 2024-05-03 | ENCE              | W   | 0.895      | 0.889        | 0.229 (0.182)    | 0.424 (0.337)    | 1 (0.895) |    19.98 | aNdu, isak, sl3nd, Snax, volt   |
|            9 |     1419 | 2024-05-02 | FORZE             | W   | 0.890      | 0.889        | 0.096 (0.076)    | 0.350 (0.277)    | 1 (0.890) |     7.76 | aNdu, isak, sl3nd, Snax, volt   |
|            8 |     1451 | 2024-05-01 | MOUZ              | L   | 0.882      | -            | -                | -                | -         |    -0.46 | aNdu, isak, sl3nd, Snax, volt   |
|            7 |     1479 | 2024-04-30 | ENCE              | W   | 0.874      | 0.889        | 0.229 (0.178)    | 0.424 (0.329)    | 1 (0.874) |    20.74 | aNdu, isak, sl3nd, Snax, volt   |
|            6 |     1694 | 2024-04-20 | BIG               | L   | 0.808      | -            | -                | -                | -         |    -7.49 | aNdu, Goody, sl3nd, Snax, volt  |
|            5 |     1784 | 2024-04-18 | Sashi             | L   | 0.795      | -            | -                | -                | -         |   -17.81 | aNdu, isak, sl3nd, Snax, volt   |
|            4 |     1861 | 2024-04-16 | MOUZ NXT          | W   | 0.782      | 0.384        | 0.158 (0.048)    | 1.000 (0.300)    | -         |     6.95 | aNdu, isak, sl3nd, Snax, volt   |
|            3 |     2253 | 2024-04-02 | Monte             | L   | 0.690      | -            | -                | -                | -         |   -11.15 | aNdu, isak, sl3nd, Snax, volt   |
|            2 |     2262 | 2024-04-02 | FAVBET            | L   | 0.689      | -            | -                | -                | -         |   -20.15 | aNdu, isak, sl3nd, Snax, volt   |
|            1 |     2282 | 2024-04-01 | GUN5              | W   | 0.682      | -            | -                | -                | -         |     0.14 | aNdu, isak, sl3nd, Snax, volt   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($71,721.75)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.24) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-17 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-23 |      1.000 | $50,000.00     | $50,000.00      |
| 2024-05-12 |      0.956 | $17,500.00     | $16,721.75      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
