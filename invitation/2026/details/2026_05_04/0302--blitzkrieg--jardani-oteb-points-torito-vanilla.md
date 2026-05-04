### Roster Details<br />
Team Name: Blitzkrieg<br />
Roster: Jardani, otEB, points, TORITO, vanilla<br />
Global Rank: [302](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_05_04.md)<br />
Regional Rank: [77]( ../../standings_americas_2026_05_04.md)<br />
<br />
Final Rank Value:  551.8<br />
<br />
Final Rank Value (551.8) = Starting Rank Value (518.1) + Head To Head Adjustments (33.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.240[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.064<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 518.1
- 400 + ( ( 0.064 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 518.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      882 | 2026-04-04 | Crashers       | L   | 1.000      | -            | -                | -                | -         |    -6.96 | otEB, points, spamzzy, TORITO, vanilla |
|            8 |      964 | 2026-04-03 | Charrados      | W   | 0.995      | 0.363        | 0.000 (0.000)    | 0.048 (0.017)    | 0 (0.000) |    12.79 | otEB, points, spamzzy, TORITO, vanilla |
|            7 |     1048 | 2026-04-02 | UNO MILLE      | L   | 0.988      | -            | -                | -                | -         |    -3.64 | otEB, points, spamzzy, TORITO, vanilla |
|            6 |     3426 | 2026-02-18 | Wildcard       | L   | 0.701      | -            | -                | -                | -         |    -0.15 | Jardani, otEB, points, TORITO, vanilla |
|            5 |     3588 | 2026-02-15 | insane players | W   | 0.681      | 0.333        | 0.021 (0.005)    | 0.464 (0.105)    | 0 (0.000) |    17.38 | Jardani, otEB, points, TORITO, vanilla |
|            4 |     3744 | 2026-02-12 | OverKnight     | W   | 0.663      | 0.333        | 0.000 (0.000)    | 0.051 (0.011)    | 0 (0.000) |     9.60 | Jardani, otEB, points, TORITO, vanilla |
|            3 |     3819 | 2026-02-10 | 900FPSvsECO    | L   | 0.650      | -            | -                | -                | -         |    -5.46 | Jardani, otEB, points, TORITO, vanilla |
|            2 |     3937 | 2026-02-06 | Shimmer        | W   | 0.623      | 0.333        | 0.010 (0.002)    | 0.074 (0.015)    | 0 (0.000) |    13.64 | Jardani, otEB, points, TORITO, vanilla |
|            1 |     4053 | 2026-02-02 | regain         | L   | 0.597      | -            | -                | -                | -         |    -3.46 | Jardani, otEB, points, TORITO, vanilla |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
