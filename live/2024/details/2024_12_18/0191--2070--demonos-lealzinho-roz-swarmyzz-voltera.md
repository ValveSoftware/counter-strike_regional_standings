### Roster Details<br />
Team Name: 2070<br />
Roster: Demonos, lealziNho, roz, swarmyzz, voltera<br />
Global Rank: [191](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_12_18.md)<br />
Regional Rank: [55]( ../../standings_americas_2024_12_18.md)<br />
<br />
Final Rank Value:  627.4<br />
<br />
Final Rank Value (627.4) = Starting Rank Value (659.8) + Head To Head Adjustments (-32.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.277[<sup>1</sup>](#table2)
- Bounty Collected: 0.239[<sup>2</sup>](#table1)
- Opponent Network: 0.026[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.136<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 659.8
- 400 + ( ( 0.136 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 659.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |       14 | 2024-12-17 | GameHunters       | L   | 1.000      | -            | -                | -                | -         |   -12.26 | Demonos, lealziNho, roz, swarmyzz, voltera |
|           12 |       17 | 2024-12-16 | LaChampionsLiga   | L   | 1.000      | -            | -                | -                | -         |   -18.78 | Demonos, lealziNho, roz, swarmyzz, voltera |
|           11 |       81 | 2024-12-13 | Players           | L   | 1.000      | -            | -                | -                | -         |   -11.74 | Demonos, lealziNho, roz, swarmyzz, voltera |
|           10 |       86 | 2024-12-13 | BeBold            | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.041 (0.006)    | 0 (0.000) |     8.20 | Demonos, lealziNho, roz, swarmyzz, voltera |
|            9 |      100 | 2024-12-12 | 9z Academy        | W   | 1.000      | 0.270        | 0.000 (0.000)    | 0.171 (0.046)    | 0 (0.000) |     9.38 | Demonos, lealziNho, roz, swarmyzz, voltera |
|            8 |      395 | 2024-11-28 | Sharks            | L   | 1.000      | -            | -                | -                | -         |    -2.04 | Demonos, lealziNho, roz, swarmyzz, voltera |
|            7 |      424 | 2024-11-26 | Patins da Ferrari | W   | 1.000      | 0.371        | 0.003 (0.001)    | 0.206 (0.076)    | 0 (0.000) |    14.99 | Demonos, lealziNho, roz, swarmyzz, voltera |
|            6 |      436 | 2024-11-25 | ShindeN           | W   | 1.000      | 0.371        | 0.015 (0.005)    | 0.198 (0.073)    | 0 (0.000) |    18.44 | Demonos, lealziNho, roz, swarmyzz, voltera |
|            5 |      478 | 2024-11-23 | Players           | L   | 1.000      | -            | -                | -                | -         |   -11.98 | Demonos, lealziNho, roz, swarmyzz, voltera |
|            4 |      529 | 2024-11-21 | GameHunters       | L   | 1.000      | -            | -                | -                | -         |   -11.96 | Demonos, lealziNho, roz, swarmyzz, voltera |
|            3 |      563 | 2024-11-19 | JOGA DE TERNO     | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.155 (0.057)    | 0 (0.000) |    13.37 | Demonos, lealziNho, roz, swarmyzz, voltera |
|            2 |      817 | 2024-11-09 | Yawara            | L   | 0.941      | -            | -                | -                | -         |   -14.67 | Demonos, kln, proSHOW, roz, voltera        |
|            1 |      976 | 2024-11-01 | Intense           | L   | 0.887      | -            | -                | -                | -         |   -13.37 | Demonos, proSHOW, roz, suNday, voltera     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($850.21)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-13 |      1.000 | $400.00        | $400.00         |
| 2024-11-03 |      0.900 | $500.00        | $450.21         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
