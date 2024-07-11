### Roster Details<br />
Team Name: ex-GUILD fe<br />
Roster: Ann4, D7, KiTKaT, Nea, pullox<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [156](../standings_global.md)<br />
Regional Rank: [100]( ../standings_europe.md)<br />
Final Rank Value:  697.8<br />
<br />
Final Rank Value (697.8) = Starting Rank Value (689.3) + Head To Head Adjustments (8.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.296[<sup>1</sup>](#table2)
- Bounty Collected: 0.243[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.137<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 689.3
- 400 + ( ( 0.137 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 689.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     1124 | 2024-05-18 | NIP Impact        | L   | 0.840      | -            | -                | -                | -         |   -10.79 | Ann4, D7, KiTKaT, Nea, pullox   |
|           11 |     1795 | 2024-04-21 | Fearless Cheetahs | W   | 0.660      | 0.331        | 0.005 (0.001)    | 0.094 (0.020)    | 0 (0.000) |    11.63 | Ann4, D7, KiTKaT, Nea, pullox   |
|           10 |     1825 | 2024-04-20 | Let Her Cook      | L   | 0.653      | -            | -                | -                | -         |    -3.70 | Ann4, D7, KiTKaT, Nea, pullox   |
|            9 |     1868 | 2024-04-19 | Imperial fe       | L   | 0.647      | -            | -                | -                | -         |    -1.64 | Ann4, D7, KiTKaT, Nea, pullox   |
|            8 |     2125 | 2024-04-10 | NIP Impact        | W   | 0.587      | 0.331        | 0.008 (0.002)    | 0.199 (0.039)    | 0 (0.000) |    11.06 | Ann4, D7, KiTKaT, Nea, pullox   |
|            7 |     2263 | 2024-04-06 | NIP Impact        | L   | 0.559      | -            | -                | -                | -         |    -7.64 | Ann4, D7, KiTKaT, Nea, pullox   |
|            6 |     2447 | 2024-03-28 | BIG EQUIPA        | W   | 0.501      | 0.331        | 0.027 (0.004)    | 0.225 (0.037)    | 0 (0.000) |    10.74 | Ann4, D7, KiTKaT, Nea, pullox   |
|            5 |     2573 | 2024-03-21 | Astralis W        | W   | 0.454      | 0.331        | 0.002 (0.000)    | 0.034 (0.005)    | 0 (0.000) |     6.20 | Ann4, D7, KiTKaT, Nea, pullox   |
|            4 |     2754 | 2024-03-13 | ENCE Athena       | L   | 0.401      | -            | -                | -                | -         |    -6.63 | Ann4, D7, KiTKaT, Nea, pullox   |
|            3 |     3184 | 2024-02-24 | BIG EQUIPA        | L   | 0.279      | -            | -                | -                | -         |    -2.88 | Ann4, D7, KiTKaT, Nea, pullox   |
|            2 |     3422 | 2024-02-14 | Spirit fe         | W   | 0.215      | 0.143        | 0.004 (0.000)    | 0.043 (0.001)    | 0 (0.000) |     3.17 | Ann4, D7, KiTKaT, Nea, pullox   |
|            1 |     3860 | 2024-01-21 | Nemesis fe        | L   | 0.053      | -            | -                | -                | -         |    -1.06 | Ann4, D7, KiTKaT, kr4sy, pullox |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,070.12)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-21 |      0.660 | $1,600.00      | $1,056.77       |
| 2024-01-21 |      0.053 | $250.00        | $13.35          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
