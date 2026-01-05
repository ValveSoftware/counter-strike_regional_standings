### Roster Details<br />
Team Name: Young Ninjas<br />
Roster: jocab, MahaR, MisteM, rud, sL1m3<br />
Global Rank: [200](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [131]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  662.5<br />
<br />
Final Rank Value (662.5) = Starting Rank Value (628.7) + Head To Head Adjustments (33.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.270[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.171[<sup>2</sup>](#table1)

The average of these factors is 0.115<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 628.7
- 400 + ( ( 0.115 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 628.7


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
|            8 |     1129 | 2025-11-07 | Acend          | L   | 0.807      | -            | -                | -                | -         |    -2.49 | jocab, MahaR, MisteM, rud, sL1m3 |
|            7 |     1142 | 2025-11-07 | Johnny Speeds  | L   | 0.806      | -            | -                | -                | -         |    -1.82 | jocab, MahaR, MisteM, rud, sL1m3 |
|            6 |     1168 | 2025-11-07 | Inner Circle   | W   | 0.806      | 0.335        | 0.069 (0.019)    | 0.534 (0.144)    | 1 (0.806) |    24.93 | jocab, MahaR, MisteM, rud, sL1m3 |
|            5 |     1183 | 2025-11-07 | Minkens finest | W   | 0.806      | 0.335        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.806) |     5.23 | jocab, MahaR, MisteM, rud, sL1m3 |
|            4 |     1195 | 2025-11-07 | Metizport      | L   | 0.805      | -            | -                | -                | -         |    -2.57 | jocab, MahaR, MisteM, rud, sL1m3 |
|            3 |     1299 | 2025-11-03 | ECLOT          | L   | 0.781      | -            | -                | -                | -         |    -1.68 | jocab, MahaR, MisteM, rud, sL1m3 |
|            2 |     1326 | 2025-11-02 | Dziuseppe      | W   | 0.774      | 0.384        | 0.004 (0.001)    | 0.209 (0.062)    | 0 (0.000) |    16.84 | jocab, MahaR, MisteM, rud, sL1m3 |
|            1 |     1380 | 2025-10-31 | FORZE Reload   | L   | 0.761      | -            | -                | -                | -         |    -4.65 | jocab, MahaR, MisteM, rud, sL1m3 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
