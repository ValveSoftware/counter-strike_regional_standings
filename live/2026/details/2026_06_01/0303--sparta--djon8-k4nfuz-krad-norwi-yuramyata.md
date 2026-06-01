### Roster Details<br />
Team Name: SPARTA<br />
Roster: Djon8, k4nfuz, Krad, Norwi, yuramyata<br />
Global Rank: [303](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [193]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  547.5<br />
<br />
Final Rank Value (547.5) = Starting Rank Value (531.2) + Head To Head Adjustments (16.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.235[<sup>2</sup>](#table1)
- Opponent Network: 0.040[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.069<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 531.2
- 400 + ( ( 0.069 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 531.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     3385 | 2026-03-10 | 5Actors    | L   | 0.648      | -            | -                | -                | -         |   -12.77 | Djon8, k4nfuz, Krad, Norwi, yuramyata |
|            7 |     3394 | 2026-03-10 | Nemiga     | L   | 0.647      | -            | -                | -                | -         |    -0.32 | Djon8, k4nfuz, Krad, Norwi, yuramyata |
|            6 |     3810 | 2026-03-02 | WW         | L   | 0.594      | -            | -                | -                | -         |    -0.60 | Djon8, k4nfuz, Krad, Norwi, yuramyata |
|            5 |     3915 | 2026-02-28 | AM         | L   | 0.579      | -            | -                | -                | -         |    -0.44 | Djon8, k4nfuz, Krad, Norwi, yuramyata |
|            4 |     4021 | 2026-02-26 | Lazer Cats | L   | 0.566      | -            | -                | -                | -         |    -2.31 | Djon8, k4nfuz, Krad, Norwi, yuramyata |
|            3 |     4055 | 2026-02-25 | ASTRAL     | W   | 0.561      | 0.435        | 0.008 (0.002)    | 0.874 (0.213)    | 0 (0.000) |    16.64 | Djon8, k4nfuz, Krad, Norwi, yuramyata |
|            2 |     4218 | 2026-02-22 | MOUZ NXT   | W   | 0.540      | 0.435        | 0.015 (0.004)    | 0.814 (0.191)    | 0 (0.000) |    16.39 | Djon8, k4nfuz, Krad, Norwi, yuramyata |
|            1 |     4290 | 2026-02-21 | WW         | L   | 0.532      | -            | -                | -                | -         |    -0.33 | Djon8, k4nfuz, Krad, Norwi, yuramyata |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
