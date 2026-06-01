### Roster Details<br />
Team Name: NuTorious<br />
Roster: Austin, Msaia, sayN, Toasty<br />
Global Rank: [311](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [76]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  533.4<br />
<br />
Final Rank Value (533.4) = Starting Rank Value (521.6) + Head To Head Adjustments (11.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.255[<sup>2</sup>](#table1)

The average of these factors is 0.064<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 521.6
- 400 + ( ( 0.064 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 521.6


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
|            9 |     1263 | 2026-04-25 | Passion UA     | L   | 0.955      | -            | -                | -                | -         |    -0.52 | colin, Msaia, sayN, swayu, Toasty      |
|            8 |     1271 | 2026-04-25 | AGA            | W   | 0.955      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.955) |     9.65 | colin, Msaia, sayN, swayu, Toasty      |
|            7 |     1291 | 2026-04-25 | Fisher College | L   | 0.954      | -            | -                | -                | -         |    -1.07 | colin, Msaia, sayN, swayu, Toasty      |
|            6 |     2452 | 2026-03-28 | LAG            | L   | 0.769      | -            | -                | -                | -         |    -0.83 | Austin, Fruitcupx, Msaia, sayN, Toasty |
|            5 |     2473 | 2026-03-28 | Demolition     | W   | 0.768      | 0.354        | 0.000 (0.000)    | 0.026 (0.007)    | 1 (0.768) |     9.49 | Austin, Fruitcupx, Msaia, sayN, Toasty |
|            4 |     2489 | 2026-03-28 | BOSS           | L   | 0.767      | -            | -                | -                | -         |    -2.60 | Austin, Fruitcupx, Msaia, sayN, Toasty |
|            3 |     2505 | 2026-03-28 | Full House     | W   | 0.766      | 0.354        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.766) |     8.24 | Austin, Fruitcupx, Msaia, sayN, Toasty |
|            2 |     2847 | 2026-03-21 | Reign Above    | L   | 0.723      | -            | -                | -                | -         |    -6.23 | Austin, Msaia, sayN, Toasty, Tylert69  |
|            1 |     2912 | 2026-03-20 | Zomblers       | L   | 0.717      | -            | -                | -                | -         |    -4.41 | Austin, Msaia, sayN, Toasty, Tylert69  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
