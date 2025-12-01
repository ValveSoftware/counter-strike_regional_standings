### Roster Details<br />
Team Name: Young Ninjas<br />
Roster: jocab, MahaR, MisteM, rud, sL1m3<br />
Global Rank: [184](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_12_01.md)<br />
Regional Rank: [113]( ../../standings_europe_2025_12_01.md)<br />
<br />
Final Rank Value:  679.0<br />
<br />
Final Rank Value (679.0) = Starting Rank Value (642.1) + Head To Head Adjustments (36.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.281[<sup>2</sup>](#table1)
- Opponent Network: 0.027[<sup>2</sup>](#table1)
- LAN Wins: 0.202[<sup>2</sup>](#table1)

The average of these factors is 0.127<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 642.1
- 400 + ( ( 0.127 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 642.1


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
|            8 |      569 | 2025-11-07 | Acend          | L   | 1.000      | -            | -                | -                | -         |    -5.82 | jocab, MahaR, MisteM, rud, sL1m3 |
|            7 |      582 | 2025-11-07 | Johnny Speeds  | L   | 1.000      | -            | -                | -                | -         |    -3.09 | jocab, MahaR, MisteM, rud, sL1m3 |
|            6 |      608 | 2025-11-07 | Inner Circle   | W   | 1.000      | 0.335        | 0.080 (0.027)    | 0.665 (0.223)    | 1 (1.000) |    30.95 | jocab, MahaR, MisteM, rud, sL1m3 |
|            5 |      623 | 2025-11-07 | Minkens finest | W   | 1.000      | 0.335        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     6.03 | jocab, MahaR, MisteM, rud, sL1m3 |
|            4 |      635 | 2025-11-07 | Metizport      | L   | 1.000      | -            | -                | -                | -         |    -3.60 | jocab, MahaR, MisteM, rud, sL1m3 |
|            3 |      739 | 2025-11-03 | ECLOT          | L   | 1.000      | -            | -                | -                | -         |    -2.54 | jocab, MahaR, MisteM, rud, sL1m3 |
|            2 |      766 | 2025-11-02 | Dziuseppe      | W   | 1.000      | 0.143        | 0.004 (0.001)    | 0.298 (0.043)    | 0 (0.000) |    21.12 | jocab, MahaR, MisteM, rud, sL1m3 |
|            1 |      820 | 2025-10-31 | FORZE Reload   | L   | 0.994      | -            | -                | -                | -         |    -6.20 | jocab, MahaR, MisteM, rud, sL1m3 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
