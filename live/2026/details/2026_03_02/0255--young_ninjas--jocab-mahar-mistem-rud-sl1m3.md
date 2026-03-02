### Roster Details<br />
Team Name: Young Ninjas<br />
Roster: jocab, MahaR, MisteM, rud, sL1m3<br />
Global Rank: [255](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [160]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  592.6<br />
<br />
Final Rank Value (592.6) = Starting Rank Value (572.7) + Head To Head Adjustments (19.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.269[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.088[<sup>2</sup>](#table1)

The average of these factors is 0.091<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 572.7
- 400 + ( ( 0.091 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 572.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     2909 | 2025-11-07 | Acend              | L   | 0.433      | -            | -                | -                | -         |    -0.58 | jocab, MahaR, MisteM, rud, sL1m3 |
|            7 |     2922 | 2025-11-07 | Johnny Speeds      | L   | 0.433      | -            | -                | -                | -         |    -0.48 | jocab, MahaR, MisteM, rud, sL1m3 |
|            6 |     2948 | 2025-11-07 | Inner Circle       | W   | 0.432      | 0.335        | 0.129 (0.019)    | 0.532 (0.077)    | 1 (0.432) |    13.04 | jocab, MahaR, MisteM, rud, sL1m3 |
|            5 |     2963 | 2025-11-07 | Minkens finest     | W   | 0.432      | 0.335        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.432) |     3.66 | jocab, MahaR, MisteM, rud, sL1m3 |
|            4 |     2975 | 2025-11-07 | Metizport          | L   | 0.432      | -            | -                | -                | -         |    -0.69 | jocab, MahaR, MisteM, rud, sL1m3 |
|            3 |     3079 | 2025-11-03 | ex-Fingers Crossed | L   | 0.408      | -            | -                | -                | -         |    -1.31 | jocab, MahaR, MisteM, rud, sL1m3 |
|            2 |     3106 | 2025-11-02 | Dziuseppe          | W   | 0.401      | 0.384        | 0.002 (0.000)    | 0.064 (0.010)    | 0 (0.000) |     8.29 | jocab, MahaR, MisteM, rud, sL1m3 |
|            1 |     3160 | 2025-10-31 | FORZE Reload       | L   | 0.387      | -            | -                | -                | -         |    -2.00 | jocab, MahaR, MisteM, rud, sL1m3 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
