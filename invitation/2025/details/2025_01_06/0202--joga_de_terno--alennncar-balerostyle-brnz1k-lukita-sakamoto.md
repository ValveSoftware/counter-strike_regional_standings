### Roster Details<br />
Team Name: JOGA DE TERNO<br />
Roster: ALENNNCAR, BALEROSTYLE, BRNZ1K, Lukita, sakamoto<br />
Global Rank: [202](../../standings_global_2025_01_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_06.md)<br />
Regional Rank: [61]( ../../standings_americas_2025_01_06.md)<br />
<br />
Final Rank Value:  590.1<br />
<br />
Final Rank Value (590.1) = Starting Rank Value (625.3) + Head To Head Adjustments (-35.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.217[<sup>1</sup>](#table2)
- Bounty Collected: 0.226[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.114<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 625.3
- 400 + ( ( 0.114 - 0.000 ) / ( 0.809 - 0.000 ) ) * 1600 = 625.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      517 | 2024-11-26 | VELOX             | L   | 0.928      | -            | -                | -                | -         |   -16.46 | ALENNNCAR, BALEROSTYLE, BRNZ1K, Lukita, sakamoto |
|           12 |      529 | 2024-11-25 | GameHunters       | L   | 0.923      | -            | -                | -                | -         |    -9.94 | ALENNNCAR, BALEROSTYLE, BRNZ1K, Lukita, sakamoto |
|           11 |      592 | 2024-11-22 | Patins da Ferrari | W   | 0.903      | 0.371        | 0.003 (0.001)    | 0.182 (0.061)    | 0 (0.000) |    15.76 | ALENNNCAR, BALEROSTYLE, BRNZ1K, Lukita, sakamoto |
|           10 |      652 | 2024-11-20 | LaChampionsLiga   | W   | 0.888      | 0.371        | 0.009 (0.003)    | 0.117 (0.039)    | 0 (0.000) |    13.97 | ALENNNCAR, BALEROSTYLE, BRNZ1K, Lukita, sakamoto |
|            9 |      661 | 2024-11-19 | 2070              | L   | 0.883      | -            | -                | -                | -         |   -11.66 | ALENNNCAR, BALEROSTYLE, BRNZ1K, Lukita, sakamoto |
|            8 |      991 | 2024-11-05 | 9z Academy        | L   | 0.788      | -            | -                | -                | -         |   -14.75 | BRNZ1K, lealziNho, Lukita, sakamoto, swarmyzz    |
|            7 |     1006 | 2024-11-04 | Vikings KR        | L   | 0.782      | -            | -                | -                | -         |    -8.06 | BRNZ1K, lealziNho, Lukita, sakamoto, swarmyzz    |
|            6 |     1069 | 2024-11-01 | GameHunters       | L   | 0.762      | -            | -                | -                | -         |    -9.55 | BRNZ1K, lealziNho, Lukita, sakamoto, swarmyzz    |
|            5 |     1090 | 2024-10-31 | paiN Academy      | W   | 0.756      | 0.371        | 0.000 (0.000)    | 0.113 (0.032)    | 0 (0.000) |     5.44 | BRNZ1K, lealziNho, Lukita, sakamoto, swarmyzz    |
|            4 |     1135 | 2024-10-29 | BESTIA Academy    | W   | 0.742      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.18 | BRNZ1K, lealziNho, Lukita, sakamoto, swarmyzz    |
|            3 |     1915 | 2024-09-27 | Fluxo             | L   | 0.528      | -            | -                | -                | -         |    -1.23 | BRNZ1K, lealziNho, Lukita, sakamoto, swarmyzz    |
|            2 |     3757 | 2024-08-03 | Sharks Youngsters | L   | 0.162      | -            | -                | -                | -         |    -2.65 | BRNZ1K, lealziNho, Lukita, sakamoto, swarmyzz    |
|            1 |     3826 | 2024-08-01 | KRÜ               | L   | 0.149      | -            | -                | -                | -         |    -1.34 | BRNZ1K, lealziNho, Lukita, sakamoto, swarmyzz    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($64.64)
- Divide that value by the 5th highest value among all rosters ($265,541.19)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
