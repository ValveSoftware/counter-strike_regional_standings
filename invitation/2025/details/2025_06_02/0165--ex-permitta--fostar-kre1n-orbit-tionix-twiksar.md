### Roster Details<br />
Team Name: ex-Permitta<br />
Roster: fostar, Kre1N, Orbit, Tionix, Twiksar<br />
Global Rank: [165](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [90]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  652.2<br />
<br />
Final Rank Value (652.2) = Starting Rank Value (630.2) + Head To Head Adjustments (22.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.250[<sup>1</sup>](#table2)
- Bounty Collected: 0.239[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.008[<sup>2</sup>](#table1)

The average of these factors is 0.125<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 630.2
- 400 + ( ( 0.125 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 630.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      168 | 2025-05-19 | CPH Wolves | L   | 1.000      | -            | -                | -                | -         |    -9.97 | fostar, Kre1N, Orbit, Tionix, Twiksar  |
|            4 |      188 | 2025-05-18 | UNiTY      | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.183 (0.026)    | 0 (0.000) |    17.68 | fostar, Kre1N, Orbit, Tionix, Twiksar  |
|            3 |      204 | 2025-05-17 | Alliance   | L   | 1.000      | -            | -                | -                | -         |    -6.10 | fostar, Kre1N, Orbit, Tionix, Twiksar  |
|            2 |      230 | 2025-05-16 | UNiTY      | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.183 (0.026)    | 0 (0.000) |    18.17 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |
|            1 |     3688 | 2024-12-14 | BIG        | W   | 0.072      | 0.332        | 0.250 (0.006)    | 0.367 (0.009)    | 1 (0.072) |     2.21 | Kre1N, Orbit, P4TriCK, Tionix, Twiksar |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($438.36)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-14 |      0.072 | $6,122.00      | $438.36         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
