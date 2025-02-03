### Roster Details<br />
Team Name: K27<br />
Roster: Aliot, kashl1d, qw1nk1, relaxxie, xeedo<br />
Global Rank: [199](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_03.md)<br />
Regional Rank: [117]( ../../standings_europe_2025_02_03.md)<br />
<br />
Final Rank Value:  556.8<br />
<br />
Final Rank Value (556.8) = Starting Rank Value (543.7) + Head To Head Adjustments (13.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.282[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.074<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 543.7
- 400 + ( ( 0.074 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 543.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      464 | 2024-12-19 | FORZE Reload   | L   | 0.893      | -            | -                | -                | -         |    -7.58 | Aliot, kashl1d, qw1nk1, relaxxie, xeedo  |
|           14 |     2274 | 2024-09-28 | CPH Wolves     | L   | 0.344      | -            | -                | -                | -         |    -2.60 | Aliot, kashl1d, relaxxie, Twizell, xeedo |
|           13 |     2408 | 2024-09-25 | Spirit Academy | L   | 0.326      | -            | -                | -                | -         |    -0.76 | Aliot, kashl1d, relaxxie, Twizell, xeedo |
|           12 |     2462 | 2024-09-24 | CPH Wolves     | W   | 0.319      | 0.143        | 0.003 (0.000)    | 0.297 (0.014)    | 0 (0.000) |     7.69 | Aliot, kashl1d, relaxxie, Twizell, xeedo |
|           11 |     2550 | 2024-09-21 | EYEBALLERS     | L   | 0.299      | -            | -                | -                | -         |    -1.85 | Aliot, kashl1d, relaxxie, Twizell, xeedo |
|           10 |     2632 | 2024-09-18 | WW             | L   | 0.281      | -            | -                | -                | -         |    -4.97 | Aliot, kashl1d, relaxxie, Twizell, xeedo |
|            9 |     2662 | 2024-09-17 | EYEBALLERS     | W   | 0.274      | 0.143        | 0.042 (0.002)    | 0.569 (0.022)    | 0 (0.000) |     6.96 | Aliot, kashl1d, relaxxie, Twizell, xeedo |
|            8 |     2712 | 2024-09-15 | 9 Pandas       | L   | 0.260      | -            | -                | -                | -         |    -0.42 | Aliot, kashl1d, relaxxie, Twizell, xeedo |
|            7 |     2721 | 2024-09-15 | Spotless       | W   | 0.259      | 0.443        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.38 | Aliot, kashl1d, relaxxie, Twizell, xeedo |
|            6 |     2729 | 2024-09-15 | Johnny Speeds  | L   | 0.258      | -            | -                | -                | -         |    -0.61 | Aliot, kashl1d, relaxxie, Twizell, xeedo |
|            5 |     2849 | 2024-09-11 | FAVBET         | L   | 0.233      | -            | -                | -                | -         |    -0.98 | Aliot, kashl1d, relaxxie, Twizell, xeedo |
|            4 |     2896 | 2024-09-09 | TNL            | W   | 0.221      | 0.372        | 0.038 (0.003)    | 0.216 (0.018)    | 0 (0.000) |     5.37 | Aliot, kashl1d, relaxxie, Twizell, xeedo |
|            3 |     2918 | 2024-09-08 | BC.Game        | W   | 0.213      | 0.372        | 0.049 (0.004)    | 0.370 (0.029)    | 0 (0.000) |     5.58 | Aliot, kashl1d, relaxxie, Twizell, xeedo |
|            2 |     2975 | 2024-09-06 | 500            | L   | 0.200      | -            | -                | -                | -         |    -0.67 | Aliot, kashl1d, relaxxie, Twizell, xeedo |
|            1 |     3084 | 2024-09-03 | ECLOT          | W   | 0.180      | 0.372        | 0.288 (0.019)    | 0.978 (0.065)    | 0 (0.000) |     5.55 | Aliot, kashl1d, relaxxie, Twizell, xeedo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
