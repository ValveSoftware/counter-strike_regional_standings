### Roster Details<br />
Team Name: Falcons<br />
Roster: dupreeh, Maden, Magisk, s1mple, Snappi<br />
Global Rank: [116](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_24.md)<br />
Regional Rank: [82]( ../../standings_europe_2025_02_24.md)<br />
<br />
Final Rank Value:  739.4<br />
<br />
Final Rank Value (739.4) = Starting Rank Value (725.5) + Head To Head Adjustments (13.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.339[<sup>1</sup>](#table2)
- Bounty Collected: 0.260[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.073[<sup>2</sup>](#table1)

The average of these factors is 0.171<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 725.5
- 400 + ( ( 0.171 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 725.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     1333 | 2024-11-19 | GamerLegion   | L   | 0.550      | -            | -                | -                | -         |    -0.31 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           14 |     1349 | 2024-11-17 | SAW           | L   | 0.542      | -            | -                | -                | -         |    -0.73 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           13 |     1360 | 2024-11-17 | FaZe          | L   | 0.538      | -            | -                | -                | -         |    -0.03 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           12 |     1373 | 2024-11-16 | ECLOT         | W   | 0.536      | 0.143        | 0.125 (0.010)    | 0.833 (0.064)    | 1 (0.536) |    14.43 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           11 |     1886 | 2024-10-26 | Eternal Fire  | L   | 0.391      | -            | -                | -                | -         |    -0.03 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           10 |     1907 | 2024-10-25 | SAW           | L   | 0.384      | -            | -                | -                | -         |    -0.46 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|            9 |     1943 | 2024-10-21 | Virtus.pro    | L   | 0.359      | -            | -                | -                | -         |    -0.10 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|            8 |     1950 | 2024-10-21 | 3DMAX         | L   | 0.357      | -            | -                | -                | -         |    -0.16 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|            7 |     2703 | 2024-09-26 | FaZe          | L   | 0.191      | -            | -                | -                | -         |    -0.01 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            6 |     2756 | 2024-09-25 | Natus Vincere | L   | 0.184      | -            | -                | -                | -         |    -0.02 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            5 |     3107 | 2024-09-14 | RED Canids    | L   | 0.111      | -            | -                | -                | -         |    -1.12 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            4 |     3141 | 2024-09-13 | Virtus.pro    | L   | 0.105      | -            | -                | -                | -         |    -0.03 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            3 |     3179 | 2024-09-12 | ATOX          | W   | 0.097      | 0.889        | 0.056 (0.005)    | 0.540 (0.047)    | 1 (0.097) |     2.54 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            2 |     3207 | 2024-09-11 | FURIA         | L   | 0.091      | -            | -                | -                | -         |    -0.09 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            1 |     3580 | 2024-08-29 | Virtus.pro    | L   | 0.004      | -            | -                | -                | -         |    -0.00 | dupreeh, Maden, Magisk, Snappi, SunPayus |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,206.07)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-27 |      0.399 | $2,000.00      | $798.21         |
| 2024-09-29 |      0.212 | $10,000.00     | $2,122.24       |
| 2024-09-22 |      0.166 | $7,000.00      | $1,163.68       |
| 2024-09-01 |      0.024 | $5,000.00      | $121.95         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
