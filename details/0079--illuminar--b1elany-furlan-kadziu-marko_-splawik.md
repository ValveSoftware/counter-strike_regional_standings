### Roster Details<br />
Team Name: Illuminar<br />
Roster: b1elany, Furlan, kadziu, Markoś, splawik<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [79](../standings_global.md)<br />
Regional Rank: [56]( ../standings_europe.md)<br />
Final Rank Value:  979.3<br />
<br />
Final Rank Value (979.3) = Starting Rank Value (898.2) + Head To Head Adjustments (81.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.362[<sup>1</sup>](#table2)
- Bounty Collected: 0.392[<sup>2</sup>](#table1)
- Opponent Network: 0.190[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.236<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 898.2
- 400 + ( ( 0.236 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 898.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |        5 | 2024-07-11 | kONO        | L   | 1.000      | -            | -                | -                | -         |   -18.18 | b1elany, Furlan, kadziu, Markoś, splawik |
|            9 |      199 | 2024-06-15 | B8          | L   | 1.000      | -            | -                | -                | -         |    -7.95 | b1elany, Furlan, kadziu, phr, ultimate   |
|            8 |      259 | 2024-06-13 | GamerLegion | W   | 1.000      | 0.435        | 0.243 (0.105)    | 0.345 (0.150)    | 0 (0.000) |    26.64 | Furlan, kadziu, phr, splawik, ultimate   |
|            7 |      269 | 2024-06-13 | Enterprise  | L   | 1.000      | -            | -                | -                | -         |   -14.89 | b1elany, Furlan, kadziu, phr, ultimate   |
|            6 |      322 | 2024-06-11 | Slovakia    | W   | 0.998      | 0.435        | 0.045 (0.019)    | 0.891 (0.386)    | 0 (0.000) |    12.22 | Furlan, kadziu, phr, splawik, ultimate   |
|            5 |      412 | 2024-06-09 | VP.Prodigy  | W   | 0.985      | 0.435        | 0.038 (0.016)    | 0.519 (0.222)    | 0 (0.000) |    14.17 | b1elany, Furlan, kadziu, phr, ultimate   |
|            4 |      446 | 2024-06-08 | 3DMAX       | W   | 0.980      | 0.450        | 0.205 (0.090)    | 1.000 (0.441)    | 0 (0.000) |    24.81 | b1elany, Furlan, kadziu, phr, ultimate   |
|            3 |      518 | 2024-06-07 | EYEBALLERS  | W   | 0.972      | 0.450        | 0.009 (0.004)    | 0.646 (0.283)    | 0 (0.000) |    15.31 | b1elany, Furlan, kadziu, phr, ultimate   |
|            2 |      527 | 2024-06-07 | CYBERSHOKE  | W   | 0.971      | 0.435        | 0.058 (0.024)    | 0.317 (0.134)    | 0 (0.000) |    11.79 | b1elany, Furlan, kadziu, phr, ultimate   |
|            1 |      565 | 2024-06-06 | Enterprise  | W   | 0.967      | 0.450        | 0.053 (0.023)    | 0.654 (0.284)    | 0 (0.000) |    17.23 | b1elany, Furlan, kadziu, phr, ultimate   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,500.00)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-17 |      1.000 | $2,500.00      | $2,500.00       |
| 2024-06-16 |      1.000 | $2,000.00      | $2,000.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
