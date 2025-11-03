### Roster Details<br />
Team Name: BLUEJAYS<br />
Roster: dare, freshie, Fruitcupx, SLIGHT, snav<br />
Global Rank: [199](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_11_03.md)<br />
Regional Rank: [60]( ../../standings_americas_2025_11_03.md)<br />
<br />
Final Rank Value:  595.4<br />
<br />
Final Rank Value (595.4) = Starting Rank Value (594.2) + Head To Head Adjustments (1.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.223[<sup>1</sup>](#table2)
- Bounty Collected: 0.190[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.104<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 594.2
- 400 + ( ( 0.104 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 594.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3941 | 2025-05-15 | NRG              | L   | 0.055      | -            | -                | -                | -         |    -0.13 | dare, freshie, Fruitcupx, SLIGHT, snav |
|            4 |     3988 | 2025-05-13 | Marsborne        | W   | 0.042      | 0.616        | 0.021 (0.001)    | 0.549 (0.014)    | 0 (0.000) |     1.15 | dare, freshie, Fruitcupx, SLIGHT, snav |
|            3 |     4107 | 2025-05-09 | Legacy           | L   | 0.016      | -            | -                | -                | -         |     0.00 | dare, freshie, Fruitcupx, SLIGHT, snav |
|            2 |     4130 | 2025-05-08 | Arrival Seven    | W   | 0.008      | 0.675        | 0.000 (0.000)    | 0.066 (0.000)    | 0 (0.000) |     0.14 | dare, freshie, Fruitcupx, SLIGHT, snav |
|            1 |     4152 | 2025-05-07 | Party Astronauts | W   | 0.002      | 0.675        | 0.000 (0.000)    | 0.030 (0.000)    | 0 (0.000) |     0.04 | dare, freshie, Fruitcupx, SLIGHT, snav |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($203.99)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-11 |      0.029 | $7,000.00      | $203.99         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
