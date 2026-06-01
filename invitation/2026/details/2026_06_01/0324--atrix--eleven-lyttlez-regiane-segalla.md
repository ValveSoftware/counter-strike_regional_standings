### Roster Details<br />
Team Name: Atrix<br />
Roster: Eleven, LyttleZ, REGIANE, segalla<br />
Global Rank: [324](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [80]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  519.8<br />
<br />
Final Rank Value (519.8) = Starting Rank Value (526.3) + Head To Head Adjustments (-6.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.250[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.066<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 526.3
- 400 + ( ( 0.066 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 526.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     2337 | 2026-03-30 | METANOIA Wolves | L   | 0.780      | -            | -                | -                | -         |    -3.98 | bokor, Eleven, LyttleZ, REGIANE, segalla    |
|            5 |     2455 | 2026-03-28 | BESTIA Academy  | L   | 0.769      | -            | -                | -                | -         |    -5.93 | bokor, Eleven, LyttleZ, REGIANE, segalla    |
|            4 |     2547 | 2026-03-27 | paiN Academy    | L   | 0.761      | -            | -                | -                | -         |    -6.19 | bokor, Eleven, LyttleZ, REGIANE, segalla    |
|            3 |     2814 | 2026-03-22 | GUARA           | L   | 0.729      | -            | -                | -                | -         |   -10.20 | Eleven, LyttleZ, REGIANE, segalla, Sofiaxyz |
|            2 |     2858 | 2026-03-21 | LP              | L   | 0.722      | -            | -                | -                | -         |    -0.67 | Eleven, LyttleZ, REGIANE, segalla, Sofiaxyz |
|            1 |     2927 | 2026-03-20 | Isurus          | W   | 0.715      | 0.363        | 0.038 (0.010)    | 0.598 (0.155)    | 0 (0.000) |    20.45 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
