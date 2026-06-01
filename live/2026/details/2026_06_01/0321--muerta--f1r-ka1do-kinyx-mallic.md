### Roster Details<br />
Team Name: MUERTA<br />
Roster: f1R, ka1do, kinyx, MaLLiC<br />
Global Rank: [321](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [201]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  522.4<br />
<br />
Final Rank Value (522.4) = Starting Rank Value (510.0) + Head To Head Adjustments (12.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.166[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.062[<sup>2</sup>](#table1)

The average of these factors is 0.058<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 510.0
- 400 + ( ( 0.058 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 510.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3430 | 2026-03-09 | Oxuji           | L   | 0.641      | -            | -                | -                | -         |    -0.49 | abdr, f1R, ka1do, kinyx, MaLLiC    |
|            4 |     3449 | 2026-03-09 | WW              | L   | 0.640      | -            | -                | -                | -         |    -0.62 | abdr, f1R, ka1do, kinyx, MaLLiC    |
|            3 |     3703 | 2026-03-04 | 1win            | L   | 0.608      | -            | -                | -                | -         |    -0.30 | f1R, ka1do, kinyx, MaLLiC, web sun |
|            2 |     3713 | 2026-03-04 | eternal premium | W   | 0.607      | 0.333        | 0.000 (0.000)    | 0.127 (0.026)    | 1 (0.607) |    14.06 | f1R, ka1do, kinyx, MaLLiC, web sun |
|            1 |     3741 | 2026-03-04 | TDK             | L   | 0.605      | -            | -                | -                | -         |    -0.32 | f1R, ka1do, kinyx, MaLLiC, web sun |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
