### Roster Details<br />
Team Name: LEON<br />
Roster: Chill, facecrack, Raijin, w1sely, yngsamurai<br />
Global Rank: [244](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [130]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  506.3<br />
<br />
Final Rank Value (506.3) = Starting Rank Value (499.4) + Head To Head Adjustments (6.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.210[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.054<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 499.4
- 400 + ( ( 0.054 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 499.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     1750 | 2025-03-22 | Hesta           | L   | 0.724      | -            | -                | -                | -         |    -9.46 | Chill, facecrack, Raijin, w1sely, yngsamurai   |
|            6 |     1897 | 2025-03-17 | Astrum          | L   | 0.692      | -            | -                | -                | -         |    -1.88 | facecrack, Raijin, RaY5ive, w1sely, yngsamurai |
|            5 |     1905 | 2025-03-17 | Virtual Cottage | W   | 0.691      | 0.143        | 0.000 (0.000)    | 0.041 (0.004)    | 0 (0.000) |     7.56 | facecrack, Raijin, RaY5ive, w1sely, yngsamurai |
|            4 |     2000 | 2025-03-12 | Nuclear TigeRES | L   | 0.658      | -            | -                | -                | -         |    -9.95 | facecrack, Raijin, RaY5ive, w1sely, yngsamurai |
|            3 |     2108 | 2025-03-09 | WOPA            | W   | 0.638      | 0.372        | 0.002 (0.000)    | 0.117 (0.028)    | 0 (0.000) |    14.03 | facecrack, Raijin, RaY5ive, w1sely, yngsamurai |
|            2 |     2183 | 2025-03-08 | PERPLEXITY      | W   | 0.631      | 0.372        | 0.005 (0.001)    | 0.175 (0.041)    | 0 (0.000) |    15.32 | facecrack, Raijin, RaY5ive, w1sely, yngsamurai |
|            1 |     2243 | 2025-03-07 | benched         | L   | 0.625      | -            | -                | -                | -         |    -8.78 | facecrack, Raijin, RaY5ive, w1sely, yngsamurai |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
