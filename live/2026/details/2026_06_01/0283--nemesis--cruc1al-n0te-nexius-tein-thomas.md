### Roster Details<br />
Team Name: Nemesis<br />
Roster: CRUC1AL, n0te, Nexius, tein, Thomas<br />
Global Rank: [283](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [180]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  586.7<br />
<br />
Final Rank Value (586.7) = Starting Rank Value (594.5) + Head To Head Adjustments (-7.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.239[<sup>1</sup>](#table2)
- Bounty Collected: 0.167[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.102<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 594.5
- 400 + ( ( 0.102 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 594.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     4625 | 2026-02-14 | SIXSEVEN     | L   | 0.488      | -            | -                | -                | -         |    -7.25 | CRUC1AL, n0te, Nexius, tein, Thomas |
|            5 |     4743 | 2026-02-12 | VP.Prodigy   | L   | 0.474      | -            | -                | -                | -         |    -6.57 | CRUC1AL, n0te, Nexius, tein, Thomas |
|            4 |     5854 | 2025-12-23 | GenOne       | L   | 0.134      | -            | -                | -                | -         |    -0.71 | CRUC1AL, n0te, Nexius, tein, Thomas |
|            3 |     5855 | 2025-12-23 | FORZE Reload | W   | 0.134      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.54 | CRUC1AL, n0te, Nexius, tein, Thomas |
|            2 |     5860 | 2025-12-22 | Sangal       | W   | 0.125      | 0.333        | 0.001 (0.000)    | 0.079 (0.003)    | 0 (0.000) |     2.48 | CRUC1AL, n0te, Nexius, tein, Thomas |
|            1 |     5899 | 2025-12-20 | UNiTY        | W   | 0.113      | 0.333        | 0.001 (0.000)    | 0.605 (0.023)    | 0 (0.000) |     2.67 | CRUC1AL, n0te, Nexius, tein, Thomas |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($403.14)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-23 |      0.134 | $3,000.00      | $403.14         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
