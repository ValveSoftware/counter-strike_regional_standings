### Roster Details<br />
Team Name: Astralis W<br />
Roster: Ismo, KiTKaT, marie, Nea, pullox<br />
Global Rank: [178](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [112]( ../standings_europe.md)<br />
<br />
Final Rank Value:  645.1<br />
<br />
Final Rank Value (645.1) = Starting Rank Value (660.8) + Head To Head Adjustments (-15.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.277[<sup>1</sup>](#table2)
- Bounty Collected: 0.225[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.127<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 660.8
- 400 + ( ( 0.127 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 660.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      111 | 2024-08-03 | Spirit fe         | L   | 1.000      | -            | -                | -                | -         |   -16.64 | Ismo, KiTKaT, marie, Nea, pullox |
|           12 |      123 | 2024-08-02 | Imperial fe       | L   | 1.000      | -            | -                | -                | -         |    -3.01 | Ismo, KiTKaT, marie, Nea, pullox |
|           11 |     2026 | 2024-05-18 | NIP Impact        | L   | 0.666      | -            | -                | -                | -         |    -8.61 | Ann4, D7, KiTKaT, Nea, pullox    |
|           10 |     2697 | 2024-04-21 | Fearless Cheetahs | W   | 0.487      | 0.331        | 0.003 (0.000)    | 0.062 (0.010)    | 0 (0.000) |     8.37 | Ann4, D7, KiTKaT, Nea, pullox    |
|            9 |     2727 | 2024-04-20 | Let Her Cook      | L   | 0.480      | -            | -                | -                | -         |    -3.19 | Ann4, D7, KiTKaT, Nea, pullox    |
|            8 |     2770 | 2024-04-19 | Imperial fe       | L   | 0.474      | -            | -                | -                | -         |    -1.64 | Ann4, D7, KiTKaT, Nea, pullox    |
|            7 |     3027 | 2024-04-10 | NIP Impact        | W   | 0.414      | 0.331        | 0.008 (0.001)    | 0.219 (0.030)    | 0 (0.000) |     7.80 | Ann4, D7, KiTKaT, Nea, pullox    |
|            6 |     3165 | 2024-04-06 | NIP Impact        | L   | 0.386      | -            | -                | -                | -         |    -5.15 | Ann4, D7, KiTKaT, Nea, pullox    |
|            5 |     3349 | 2024-03-28 | BIG EQUIPA        | W   | 0.327      | 0.331        | 0.017 (0.002)    | 0.142 (0.015)    | 0 (0.000) |     6.69 | Ann4, D7, KiTKaT, Nea, pullox    |
|            4 |     3475 | 2024-03-21 | Astralis W        | W   | 0.281      | 0.331        | 0.001 (0.000)    | 0.019 (0.002)    | 0 (0.000) |     3.95 | Ann4, D7, KiTKaT, Nea, pullox    |
|            3 |     3656 | 2024-03-13 | ENCE Athena       | L   | 0.227      | -            | -                | -                | -         |    -3.77 | Ann4, D7, KiTKaT, Nea, pullox    |
|            2 |     4086 | 2024-02-24 | BIG EQUIPA        | L   | 0.106      | -            | -                | -                | -         |    -1.19 | Ann4, D7, KiTKaT, Nea, pullox    |
|            1 |     4324 | 2024-02-14 | Spirit fe         | W   | 0.041      | 0.143        | 0.005 (0.000)    | 0.136 (0.001)    | 0 (0.000) |     0.66 | Ann4, D7, KiTKaT, Nea, pullox    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($779.51)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
