### Roster Details<br />
Team Name: R2<br />
Roster: ABM, guidimon, JonY BoY, maaxg1, tutehen<br />
Global Rank: [217](../../standings_global_2025_10_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_10_06.md)<br />
Regional Rank: [65]( ../../standings_americas_2025_10_06.md)<br />
<br />
Final Rank Value:  539.5<br />
<br />
Final Rank Value (539.5) = Starting Rank Value (513.8) + Head To Head Adjustments (25.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.214[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.058<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 513.8
- 400 + ( ( 0.058 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 513.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     1356 | 2025-08-16 | Fluxo          | L   | 0.862      | -            | -                | -                | -         |    -0.49 | ABM, guidimon, JonY BoY, maaxg1, tutehen |
|            6 |     1447 | 2025-08-14 | Yawara         | W   | 0.849      | 0.371        | 0.007 (0.002)    | 0.338 (0.106)    | 0 (0.000) |    21.70 | ABM, guidimon, JonY BoY, maaxg1, tutehen |
|            5 |     1596 | 2025-08-11 | Vasco          | W   | 0.829      | 0.371        | 0.000 (0.000)    | 0.182 (0.056)    | 0 (0.000) |    15.13 | ABM, guidimon, JonY BoY, maaxg1, tutehen |
|            4 |     1678 | 2025-08-09 | JERSA          | W   | 0.814      | 0.371        | 0.000 (0.000)    | 0.057 (0.017)    | 0 (0.000) |    11.58 | ABM, guidimon, JonY BoY, maaxg1, tutehen |
|            3 |     1709 | 2025-08-07 | Bounty Hunters | L   | 0.802      | -            | -                | -                | -         |    -8.78 | ABM, JonY BoY, maaxg1, nbl, tutehen      |
|            2 |     1881 | 2025-07-27 | BESTIA         | L   | 0.728      | -            | -                | -                | -         |    -1.07 | ABM, guidimon, JonY BoY, maaxg1, tutehen |
|            1 |     2253 | 2025-07-09 | Galorys        | L   | 0.609      | -            | -                | -                | -         |   -12.35 | ABM, JonY BoY, maaxg1, nbl, tutehen      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($380,085.28)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
