### Roster Details<br />
Team Name: Desi Boyz<br />
Roster: mason, Momo, Pluto, Shooter, Taqi<br />
Global Rank: [171](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_11_02.md)<br />
Regional Rank: [32]( ../../standings_americas_2026_11_02.md)<br />
<br />
Final Rank Value:  768.8<br />
<br />
Final Rank Value (768.8) = Starting Rank Value (785.2) + Head To Head Adjustments (-16.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.281[<sup>1</sup>](#table2)
- Bounty Collected: 0.264[<sup>2</sup>](#table1)
- Opponent Network: 0.046[<sup>2</sup>](#table1)
- LAN Wins: 0.231[<sup>2</sup>](#table1)

The average of these factors is 0.206<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 785.2
- 400 + ( ( 0.206 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 785.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |      843 | 2026-10-09 | EMPIRE          | L   | 1.000      | -            | -                | -                | -         |   -20.75 | jsfeltner, mason, Momo, Shooter, Taqi  |
|           16 |      895 | 2026-10-08 | Zomblers        | L   | 1.000      | -            | -                | -                | -         |   -21.78 | jsfeltner, mason, Momo, Shooter, Taqi  |
|           15 |      946 | 2026-10-07 | OverKnight      | W   | 1.000      | 0.363        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.73 | jsfeltner, mason, Momo, Shooter, Taqi  |
|           14 |     1513 | 2026-09-25 | Without a Roof  | L   | 0.949      | -            | -                | -                | -         |    -7.77 | mason, Momo, Pluto, Shooter, Taqi      |
|           13 |     1888 | 2026-09-18 | Overtake Sector | W   | 0.903      | 0.355        | 0.023 (0.007)    | 0.460 (0.148)    | 0 (0.000) |    13.27 | mason, Momo, Pluto, Shooter, Taqi      |
|           12 |     2141 | 2026-09-12 | Marsborne       | L   | 0.863      | -            | -                | -                | -         |    -9.56 | mason, Momo, Pluto, Shooter, Taqi      |
|           11 |     2249 | 2026-09-10 | Zomblers        | W   | 0.850      | 0.355        | 0.005 (0.002)    | 0.225 (0.068)    | 0 (0.000) |     8.25 | mason, Momo, Pluto, Shooter, Taqi      |
|           10 |     2436 | 2026-09-06 | Without a Roof  | L   | 0.822      | -            | -                | -                | -         |    -7.10 | mason, Momo, Pluto, Shooter, Taqi      |
|            9 |     2441 | 2026-09-06 | LAG             | L   | 0.821      | -            | -                | -                | -         |    -5.71 | mason, Momo, Pluto, Shooter, Taqi      |
|            8 |     2496 | 2026-09-05 | Wanted Goons    | W   | 0.815      | 0.333        | 0.000 (0.000)    | 0.148 (0.040)    | 0 (0.000) |     7.06 | mason, Momo, Pluto, Shooter, Taqi      |
|            7 |     2544 | 2026-09-04 | SportsBetExpert | L   | 0.809      | -            | -                | -                | -         |    -3.08 | mason, Momo, Pluto, Shooter, Taqi      |
|            6 |     2586 | 2026-09-03 | Chicken Coop    | W   | 0.802      | 0.333        | 0.020 (0.005)    | 0.184 (0.049)    | 0 (0.000) |    11.66 | mason, Momo, Pluto, Shooter, Taqi      |
|            5 |     2748 | 2026-08-30 | SportsBetExpert | L   | 0.775      | -            | -                | -                | -         |    -2.74 | jsfeltner, mason, Momo, Shooter, Wilky |
|            4 |     2764 | 2026-08-30 | Wanted Goons    | W   | 0.774      | 0.333        | 0.000 (0.000)    | 0.148 (0.038)    | 1 (0.774) |     7.15 | jsfeltner, mason, Momo, Shooter, Wilky |
|            3 |     2805 | 2026-08-30 | regain          | W   | 0.771      | 0.333        | 0.008 (0.002)    | 0.387 (0.099)    | 1 (0.771) |    11.48 | jsfeltner, mason, Momo, Shooter, Wilky |
|            2 |     2809 | 2026-08-29 | KODEX           | W   | 0.770      | 0.333        | 0.000 (0.000)    | 0.060 (0.015)    | 1 (0.770) |     5.70 | jsfeltner, mason, Momo, Shooter, Wilky |
|            1 |     2815 | 2026-08-29 | LAG             | L   | 0.769      | -            | -                | -                | -         |    -5.17 | jsfeltner, mason, Momo, Shooter, Wilky |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,506.44)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-09-27 |      0.963 | $1,000.00      | $962.89         |
| 2026-08-30 |      0.776 | $700.00        | $543.54         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
