### Roster Details<br />
Team Name: Young Ninjas<br />
Roster: jocab, MahaR, MisteM, rud, sL1m3<br />
Global Rank: [329](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [197]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  486.7<br />
<br />
Final Rank Value (486.7) = Starting Rank Value (486.3) + Head To Head Adjustments (0.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.183[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.002[<sup>2</sup>](#table1)

The average of these factors is 0.046<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 486.3
- 400 + ( ( 0.046 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 486.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     5906 | 2025-11-07 | Acend          | L   | 0.013      | -            | -                | -                | -         |    -0.01 | jocab, MahaR, MisteM, rud, sL1m3 |
|            4 |     5919 | 2025-11-07 | Johnny Speeds  | L   | 0.013      | -            | -                | -                | -         |    -0.00 | jocab, MahaR, MisteM, rud, sL1m3 |
|            3 |     5945 | 2025-11-07 | Inner Circle   | W   | 0.013      | 0.335        | 0.083 (0.000)    | 0.453 (0.002)    | 1 (0.013) |     0.39 | jocab, MahaR, MisteM, rud, sL1m3 |
|            2 |     5960 | 2025-11-07 | Minkens finest | W   | 0.012      | 0.335        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.012) |     0.15 | jocab, MahaR, MisteM, rud, sL1m3 |
|            1 |     5972 | 2025-11-07 | Metizport      | L   | 0.012      | -            | -                | -                | -         |    -0.12 | jocab, MahaR, MisteM, rud, sL1m3 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
