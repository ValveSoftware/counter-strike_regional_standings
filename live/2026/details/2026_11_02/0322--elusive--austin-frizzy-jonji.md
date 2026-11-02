### Roster Details<br />
Team Name: Elusive<br />
Roster: Austin, FRIZZY, Jonji<br />
Global Rank: [322](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_11_02.md)<br />
Regional Rank: [70]( ../../standings_americas_2026_11_02.md)<br />
<br />
Final Rank Value:  522.7<br />
<br />
Final Rank Value (522.7) = Starting Rank Value (502.3) + Head To Head Adjustments (20.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.213[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.055<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 502.3
- 400 + ( ( 0.055 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 502.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      809 | 2026-10-10 | Marsborne       | L   | 1.000      | -            | -                | -                | -         |    -2.50 | Austin, FRIZZY, Jonji, LittleBEER, Treehen |
|            5 |     2812 | 2026-08-29 | SportsBetExpert | L   | 0.769      | -            | -                | -                | -         |    -0.65 | Austin, BiBiAhn, FRIZZY, Redman, Treehen   |
|            4 |     2863 | 2026-08-28 | Zomblers        | L   | 0.762      | -            | -                | -                | -         |    -7.52 | Austin, FRIZZY, Jonji, Msaia, sayN         |
|            3 |     2909 | 2026-08-27 | NuTorious       | W   | 0.756      | 0.363        | 0.003 (0.001)    | 0.195 (0.054)    | 0 (0.000) |    18.15 | Austin, FRIZZY, Jonji, Msaia, sayN         |
|            2 |     2947 | 2026-08-26 | Shimmer         | W   | 0.749      | 0.363        | 0.004 (0.001)    | 0.010 (0.003)    | 0 (0.000) |    15.29 | Austin, FRIZZY, Jonji, Msaia, sayN         |
|            1 |     3000 | 2026-08-25 | Marsborne       | L   | 0.743      | -            | -                | -                | -         |    -2.35 | Austin, FRIZZY, Jonji, Msaia, sayN         |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
