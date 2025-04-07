### Roster Details<br />
Team Name: BadGuys<br />
Roster: BOROS, hAdji, leen, Sapec, Woro2k<br />
Global Rank: [242](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [137]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  522.8<br />
<br />
Final Rank Value (522.8) = Starting Rank Value (503.8) + Head To Head Adjustments (19.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.218[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.056<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 503.8
- 400 + ( ( 0.056 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 503.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1670 | 2025-01-09 | kONO             | L   | 0.614      | -            | -                | -                | -         |    -8.71 | BOROS, hAdji, leen, Sapec, Woro2k |
|            5 |     1674 | 2025-01-08 | FLuffy Gangsters | W   | 0.608      | 0.143        | 0.003 (0.000)    | 0.211 (0.018)    | 0 (0.000) |    12.38 | hAdji, leen, Sapec, VLDN, Woro2k  |
|            4 |     1683 | 2025-01-06 | WOPA             | W   | 0.593      | 0.143        | 0.021 (0.002)    | 0.357 (0.030)    | 0 (0.000) |    14.25 | hAdji, leen, Sapec, VLDN, Woro2k  |
|            3 |     1686 | 2025-01-05 | los kogutos      | L   | 0.586      | -            | -                | -                | -         |    -9.72 | BOROS, hAdji, leen, VLDN, Woro2k  |
|            2 |     1696 | 2025-01-03 | ECSTATIC         | L   | 0.572      | -            | -                | -                | -         |    -1.99 | hAdji, Patti, Sapec, VLDN, Woro2k |
|            1 |     1703 | 2024-12-28 | GenOne           | W   | 0.535      | 0.143        | 0.006 (0.000)    | 0.391 (0.030)    | 0 (0.000) |    12.77 | hAdji, Patti, Sapec, VLDN, Woro2k |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
