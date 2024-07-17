### Roster Details<br />
Team Name: GamerLegion<br />
Roster: aNdu, FL4MUS, sl3nd, Snax, volt<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [29](../standings_global.md)<br />
Regional Rank: [19]( ../standings_europe.md)<br />
Final Rank Value:  1251.6<br />
<br />
Final Rank Value (1251.6) = Starting Rank Value (1266.7) + Head To Head Adjustments (-15.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.620[<sup>1</sup>](#table2)
- Bounty Collected: 0.479[<sup>2</sup>](#table1)
- Opponent Network: 0.274[<sup>2</sup>](#table1)
- LAN Wins: 0.241[<sup>2</sup>](#table1)

The average of these factors is 0.404<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1266.7
- 400 + ( ( 0.404 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1266.7


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
|           22 |      350 | 2024-06-15 | 5W                | L   | 0.987      | -            | -                | -                | -         |   -23.45 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           21 |      392 | 2024-06-14 | Endpoint          | W   | 0.980      | 0.450        | -                | 0.498 (0.220)    | 0 (0.000) |     3.43 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           20 |      423 | 2024-06-13 | Illuminar         | L   | 0.974      | -            | -                | -                | -         |   -26.99 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           19 |      596 | 2024-06-08 | 5W                | W   | 0.941      | 0.450        | 0.122 (0.052)    | -                | 0 (0.000) |     5.17 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           18 |      653 | 2024-06-07 | MOUZ NXT          | W   | 0.934      | 0.450        | 0.150 (0.063)    | 1.000 (0.421)    | 0 (0.000) |     9.45 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           17 |      714 | 2024-06-06 | ECLOT             | W   | 0.928      | 0.450        | 0.103 (0.043)    | 0.551 (0.230)    | 0 (0.000) |     9.97 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           16 |      950 | 2024-05-31 | GUN5              | L   | 0.887      | -            | -                | -                | -         |   -23.68 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           15 |     1159 | 2024-05-22 | Eternal Fire      | L   | 0.827      | -            | -                | -                | -         |    -2.23 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           14 |     1189 | 2024-05-21 | AMKAL             | W   | 0.821      | 0.769        | 0.134 (0.085)    | 0.523 (0.330)    | 0 (0.000) |    10.78 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           13 |     1300 | 2024-05-18 | fnatic            | W   | 0.799      | 0.769        | 0.300 (0.184)    | 0.632 (0.388)    | 0 (0.000) |    19.50 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           12 |     1321 | 2024-05-17 | Gaimin Gladiators | W   | 0.794      | 0.769        | 0.067 (0.041)    | 0.488 (0.298)    | 0 (0.000) |     7.37 | aNdu, FL4MUS, sl3nd, Snax, volt |
|           11 |     1626 | 2024-05-07 | Virtus.pro        | L   | 0.728      | -            | -                | -                | -         |    -1.64 | aNdu, isak, sl3nd, Snax, volt   |
|           10 |     1700 | 2024-05-03 | ENCE              | W   | 0.700      | 0.889        | 0.212 (0.132)    | 0.377 (0.234)    | 1 (0.700) |    14.92 | aNdu, isak, sl3nd, Snax, volt   |
|            9 |     1717 | 2024-05-02 | FORZE             | W   | 0.694      | 0.889        | 0.095 (0.058)    | 0.269 (0.166)    | 1 (0.694) |     5.36 | aNdu, isak, sl3nd, Snax, volt   |
|            8 |     1749 | 2024-05-01 | MOUZ              | L   | 0.687      | -            | -                | -                | -         |    -0.31 | aNdu, isak, sl3nd, Snax, volt   |
|            7 |     1777 | 2024-04-30 | ENCE              | W   | 0.679      | 0.889        | 0.212 (0.128)    | 0.377 (0.227)    | 1 (0.679) |    15.25 | aNdu, isak, sl3nd, Snax, volt   |
|            6 |     1992 | 2024-04-20 | BIG               | L   | 0.613      | -            | -                | -                | -         |    -6.19 | aNdu, Goody, sl3nd, Snax, volt  |
|            5 |     2082 | 2024-04-18 | Sashi             | L   | 0.600      | -            | -                | -                | -         |   -12.72 | aNdu, isak, sl3nd, Snax, volt   |
|            4 |     2159 | 2024-04-16 | MOUZ NXT          | W   | 0.587      | 0.384        | 0.150 (0.034)    | 1.000 (0.225)    | -         |     5.75 | aNdu, isak, sl3nd, Snax, volt   |
|            3 |     2551 | 2024-04-02 | Monte             | L   | 0.494      | -            | -                | -                | -         |   -10.73 | aNdu, isak, sl3nd, Snax, volt   |
|            2 |     2560 | 2024-04-02 | FAVBET            | L   | 0.493      | -            | -                | -                | -         |   -14.27 | aNdu, isak, sl3nd, Snax, volt   |
|            1 |     2580 | 2024-04-01 | GUN5              | W   | 0.486      | -            | -                | -                | -         |     0.12 | aNdu, isak, sl3nd, Snax, volt   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($59,989.59)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.24) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-17 |      0.999 | $5,000.00      | $4,997.44       |
| 2024-05-23 |      0.834 | $50,000.00     | $41,687.86      |
| 2024-05-12 |      0.760 | $17,500.00     | $13,304.29      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
