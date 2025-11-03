### Roster Details<br />
Team Name: LAG<br />
Roster: Andrew, brett, mason, Sandman, Wolffe<br />
Global Rank: [237](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_11_03.md)<br />
Regional Rank: [75]( ../../standings_americas_2025_11_03.md)<br />
<br />
Final Rank Value:  510.1<br />
<br />
Final Rank Value (510.1) = Starting Rank Value (478.3) + Head To Head Adjustments (31.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.158[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.042<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 478.3
- 400 + ( ( 0.042 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 478.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     2289 | 2025-08-15 | Take Flyte    | W   | 0.669      | 0.363        | 0.000 (0.000)    | 0.207 (0.050)    | 0 (0.000) |    12.35 | Aureo, brett, mason, Sandman, Wolffe  |
|            5 |     2338 | 2025-08-14 | NRG           | L   | 0.663      | -            | -                | -                | -         |    -0.89 | Andrew, brett, mason, Sandman, Wolffe |
|            4 |     2438 | 2025-08-12 | Arrival Seven | W   | 0.649      | 0.363        | 0.000 (0.000)    | 0.066 (0.016)    | 0 (0.000) |    13.25 | Andrew, brett, mason, Sandman, Wolffe |
|            3 |     2724 | 2025-07-30 | Wildcard      | L   | 0.562      | -            | -                | -                | -         |    -0.75 | Andrew, brett, mason, Sandman, Wolffe |
|            2 |     2751 | 2025-07-28 | MIGHT         | W   | 0.548      | 0.616        | 0.000 (0.000)    | 0.069 (0.023)    | 0 (0.000) |     9.03 | Andrew, brett, mason, Sandman, Wolffe |
|            1 |     2816 | 2025-07-26 | Marsborne     | L   | 0.535      | -            | -                | -                | -         |    -1.18 | Andrew, brett, mason, Sandman, Wolffe |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
