### Roster Details<br />
Team Name: Falcons<br />
Roster: dupreeh, Maden, Magisk, s1mple, Snappi<br />
Global Rank: [127](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_03.md)<br />
Regional Rank: [85]( ../../standings_europe_2025_03_03.md)<br />
<br />
Final Rank Value:  729.3<br />
<br />
Final Rank Value (729.3) = Starting Rank Value (717.0) + Head To Head Adjustments (12.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.332[<sup>1</sup>](#table2)
- Bounty Collected: 0.254[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.064[<sup>2</sup>](#table1)

The average of these factors is 0.165<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 717.0
- 400 + ( ( 0.165 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 717.0


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
|           14 |     1421 | 2024-11-19 | GamerLegion   | L   | 0.505      | -            | -                | -                | -         |    -0.26 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           13 |     1437 | 2024-11-17 | SAW           | L   | 0.497      | -            | -                | -                | -         |    -0.63 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           12 |     1448 | 2024-11-17 | FaZe          | L   | 0.492      | -            | -                | -                | -         |    -0.02 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           11 |     1461 | 2024-11-16 | ECLOT         | W   | 0.491      | 0.143        | 0.129 (0.009)    | 0.762 (0.053)    | 1 (0.491) |    13.23 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           10 |     1974 | 2024-10-26 | Eternal Fire  | L   | 0.345      | -            | -                | -                | -         |    -0.02 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|            9 |     1995 | 2024-10-25 | SAW           | L   | 0.339      | -            | -                | -                | -         |    -0.39 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|            8 |     2031 | 2024-10-21 | Virtus.pro    | L   | 0.314      | -            | -                | -                | -         |    -0.07 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|            7 |     2038 | 2024-10-21 | 3DMAX         | L   | 0.312      | -            | -                | -                | -         |    -0.12 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|            6 |     2791 | 2024-09-26 | FaZe          | L   | 0.146      | -            | -                | -                | -         |    -0.01 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            5 |     2844 | 2024-09-25 | Natus Vincere | L   | 0.138      | -            | -                | -                | -         |    -0.02 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            4 |     3195 | 2024-09-14 | RED Canids    | L   | 0.066      | -            | -                | -                | -         |    -0.70 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            3 |     3229 | 2024-09-13 | Virtus.pro    | L   | 0.059      | -            | -                | -                | -         |    -0.01 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            2 |     3267 | 2024-09-12 | ATOX          | W   | 0.052      | 0.889        | 0.057 (0.003)    | 0.651 (0.030)    | 1 (0.052) |     1.37 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            1 |     3295 | 2024-09-11 | FURIA         | L   | 0.046      | -            | -                | -                | -         |    -0.05 | dupreeh, Maden, Magisk, Snappi, SunPayus |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,223.27)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-27 |      0.354 | $2,000.00      | $707.59         |
| 2024-09-29 |      0.167 | $10,000.00     | $1,669.16       |
| 2024-09-22 |      0.121 | $7,000.00      | $846.52         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
