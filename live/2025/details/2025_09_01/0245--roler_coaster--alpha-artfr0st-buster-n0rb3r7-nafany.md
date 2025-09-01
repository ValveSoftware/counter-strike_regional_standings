### Roster Details<br />
Team Name: Roler Coaster<br />
Roster: alpha, ArtFr0st, buster, n0rb3r7, nafany<br />
Global Rank: [245](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_09_01.md)<br />
Regional Rank: [125]( ../../standings_europe_2025_09_01.md)<br />
<br />
Final Rank Value:  505.4<br />
<br />
Final Rank Value (505.4) = Starting Rank Value (500.7) + Head To Head Adjustments (4.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.204[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 500.7
- 400 + ( ( 0.053 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 500.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     3211 | 2025-03-28 | Sashi        | L   | 0.152      | -            | -                | -                | -         |    -0.38 | alpha, ArtFr0st, buster, n0rb3r7, nafany    |
|            7 |     3283 | 2025-03-27 | B8           | L   | 0.145      | -            | -                | -                | -         |    -0.06 | alpha, ArtFr0st, buster, n0rb3r7, nafany    |
|            6 |     3585 | 2025-03-17 | ECSTATIC     | L   | 0.082      | -            | -                | -                | -         |    -0.06 | alpha, ArtFr0st, buster, n0rb3r7, nafany    |
|            5 |     3586 | 2025-03-17 | RUBY         | W   | 0.082      | 0.624        | 0.020 (0.001)    | 0.851 (0.043)    | 0 (0.000) |     2.28 | alpha, ArtFr0st, buster, n0rb3r7, nafany    |
|            4 |     3588 | 2025-03-17 | FORZE Reload | W   | 0.081      | 0.624        | 0.004 (0.000)    | 0.415 (0.021)    | 0 (0.000) |     2.05 | alpha, ArtFr0st, buster, n0rb3r7, nafany    |
|            3 |     3594 | 2025-03-17 | Enjoy        | W   | 0.080      | 0.624        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.91 | alpha, ArtFr0st, buster, n0rb3r7, nafany    |
|            2 |     3846 | 2025-03-08 | FUT          | L   | 0.021      | -            | -                | -                | -         |    -0.04 | alpha, ArtFr0st, nafany, Perfecto, YEKINDAR |
|            1 |     3943 | 2025-03-07 | BIG          | L   | 0.013      | -            | -                | -                | -         |    -0.01 | alpha, ArtFr0st, nafany, Perfecto, YEKINDAR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
