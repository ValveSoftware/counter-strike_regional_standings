### Roster Details<br />
Team Name: Outfit 49<br />
Roster: Andrew, brett, LUKE4k, s3rum, sava9e<br />
Global Rank: [313](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_05_04.md)<br />
Regional Rank: [82]( ../../standings_americas_2026_05_04.md)<br />
<br />
Final Rank Value:  532.8<br />
<br />
Final Rank Value (532.8) = Starting Rank Value (525.2) + Head To Head Adjustments (7.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.224[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.040[<sup>2</sup>](#table1)

The average of these factors is 0.067<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 525.2
- 400 + ( ( 0.067 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 525.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     4836 | 2026-01-03 | Voca         | L   | 0.395      | -            | -                | -                | -         |    -0.11 | Andrew, brett, LUKE4k, s3rum, sava9e    |
|            9 |     4841 | 2026-01-03 | Dark Knight  | W   | 0.394      | 0.323        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.394) |     4.04 | Andrew, brett, LUKE4k, s3rum, sava9e    |
|            8 |     4844 | 2026-01-03 | Voca         | L   | 0.393      | -            | -                | -                | -         |    -0.11 | Andrew, brett, LUKE4k, s3rum, sava9e    |
|            7 |     5033 | 2025-12-11 | Surge        | L   | 0.243      | -            | -                | -                | -         |    -3.73 | Andrew, brett, LUKE4k, s3rum, sava9e    |
|            6 |     5043 | 2025-12-10 | Wanted Goons | W   | 0.237      | 0.333        | 0.000 (0.000)    | 0.163 (0.013)    | 0 (0.000) |     4.64 | Andrew, brett, LUKE4k, s3rum, sava9e    |
|            5 |     5073 | 2025-12-08 | Rave         | L   | 0.223      | -            | -                | -                | -         |    -1.69 | Andrew, brett, LUKE4k, s3rum, sava9e    |
|            4 |     5166 | 2025-12-04 | BOSS         | L   | 0.196      | -            | -                | -                | -         |    -0.55 | Andrew, brett, LUKE4k, s3rum, sava9e    |
|            3 |     5205 | 2025-12-02 | LAG          | W   | 0.183      | 0.333        | 0.056 (0.003)    | 0.792 (0.048)    | 0 (0.000) |     5.49 | Andrew, brett, LUKE4k, s3rum, sava9e    |
|            2 |     5827 | 2025-11-08 | Memeories    | L   | 0.022      | -            | -                | -                | -         |    -0.38 | Bizarre666, dAVE, LUKE4k, s3rum, sava9e |
|            1 |     5834 | 2025-11-08 | NRG          | L   | 0.022      | -            | -                | -                | -         |    -0.01 | Bizarre666, dAVE, LUKE4k, s3rum, sava9e |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
