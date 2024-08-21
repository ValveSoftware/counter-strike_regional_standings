### Roster Details<br />
Team Name: VexX<br />
Roster: apocdud, foggers, kibstar, Kobe, void<br />
Global Rank: [194](../../standings_global_2024_08_14.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_08_14.md)<br />
Regional Rank: [23]( ../../standings_asia_2024_08_14.md)<br />
<br />
Final Rank Value:  603.5<br />
<br />
Final Rank Value (603.5) = Starting Rank Value (607.6) + Head To Head Adjustments (-4.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.234[<sup>1</sup>](#table2)
- Bounty Collected: 0.186[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.105<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 607.6
- 400 + ( ( 0.105 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 607.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     3675 | 2024-03-27 | Rooster            | L   | 0.264      | -            | -                | -                | -         |    -2.46 | apocdud, foggers, kibstar, Kobe, void    |
|           14 |     3678 | 2024-03-27 | Rooster            | L   | 0.264      | -            | -                | -                | -         |    -2.50 | apocdud, foggers, kibstar, Kobe, void    |
|           13 |     3723 | 2024-03-23 | KZG                | L   | 0.237      | -            | -                | -                | -         |    -3.09 | apocdud, foggers, Kobe, rekonz, void     |
|           12 |     3725 | 2024-03-23 | Bad News Kangaroos | L   | 0.237      | -            | -                | -                | -         |    -2.56 | apocdud, foggers, Kobe, rekonz, void     |
|           11 |     4118 | 2024-03-06 | KZG                | W   | 0.124      | 0.333        | 0.005 (0.000)    | 0.145 (0.006)    | 0 (0.000) |     2.33 | apocdud, foggers, Kobe, void, yourwombat |
|           10 |     4125 | 2024-03-06 | KZG                | W   | 0.124      | 0.333        | 0.005 (0.000)    | 0.145 (0.006)    | 0 (0.000) |     2.35 | apocdud, foggers, Kobe, void, yourwombat |
|            9 |     4293 | 2024-02-27 | Canon Event        | W   | 0.070      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.81 | apocdud, damyo, foggers, Kobe, void      |
|            8 |     4295 | 2024-02-27 | Canon Event        | W   | 0.070      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.81 | apocdud, damyo, foggers, Kobe, void      |
|            7 |     4430 | 2024-02-21 | Vantage            | L   | 0.030      | -            | -                | -                | -         |    -0.43 | apocdud, damyo, foggers, Kobe, void      |
|            6 |     4451 | 2024-02-20 | Cringexe           | W   | 0.024      | 0.143        | 0.000 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     0.24 | apocdud, damyo, foggers, Kobe, void      |
|            5 |     4453 | 2024-02-20 | gfg123321          | W   | 0.024      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.18 | apocdud, damyo, foggers, Kobe, void      |
|            4 |     4497 | 2024-02-18 | FlyQuest           | L   | 0.010      | -            | -                | -                | -         |    -0.02 | apocdud, damyo, foggers, Kobe, void      |
|            3 |     4498 | 2024-02-18 | KZG                | W   | 0.010      | 0.143        | 0.005 (0.000)    | 0.145 (0.000)    | 0 (0.000) |     0.19 | apocdud, damyo, foggers, Kobe, void      |
|            2 |     4501 | 2024-02-17 | FlyQuest           | L   | 0.008      | -            | -                | -                | -         |    -0.02 | apocdud, damyo, foggers, Kobe, void      |
|            1 |     4524 | 2024-02-16 | LYG                | W   | 0.002      | 0.303        | 0.003 (0.000)    | 0.025 (0.000)    | 0 (0.000) |     0.04 | apocdud, damyo, foggers, Kobe, void      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($167.44)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-23 |      0.237 | $662.00        | $157.09         |
| 2024-02-17 |      0.008 | $1,250.00      | $10.35          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
