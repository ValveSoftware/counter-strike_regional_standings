### Roster Details<br />
Team Name: DESEMPREGO<br />
Roster: h0t, M1KA, NOPEEJ, snapy, snowiee<br />
Global Rank: [92](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [64]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  834.5<br />
<br />
Final Rank Value (834.5) = Starting Rank Value (820.2) + Head To Head Adjustments (14.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.298[<sup>1</sup>](#table2)
- Bounty Collected: 0.291[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.278[<sup>2</sup>](#table1)

The average of these factors is 0.222<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 820.2
- 400 + ( ( 0.222 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 820.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |       86 | 2025-07-27 | SAW          | L   | 1.000      | -            | -                | -                | -         |    -1.67 | h0t, M1KA, NOPEEJ, snapy, snowiee |
|            6 |       96 | 2025-07-27 | Leça         | W   | 1.000      | 0.309        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     2.52 | h0t, M1KA, NOPEEJ, snapy, snowiee |
|            5 |     1344 | 2025-05-11 | Rhyno        | L   | 0.633      | -            | -                | -                | -         |   -11.17 | h0t, M1KA, opdust, snowiee, SYDOX |
|            4 |     1377 | 2025-05-10 | Iberian Soul | W   | 0.626      | 0.316        | 0.181 (0.036)    | 1.000 (0.197)    | 1 (0.626) |    18.47 | h0t, M1KA, opdust, snowiee, SYDOX |
|            3 |     1397 | 2025-05-09 | The Animals  | W   | 0.620      | 0.316        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.620) |     2.81 | h0t, M1KA, opdust, snowiee, SYDOX |
|            2 |     2919 | 2025-03-16 | Iberian Soul | L   | 0.260      | -            | -                | -                | -         |    -0.34 | h0t, M1KA, opdust, snowiee, ZPX   |
|            1 |     2937 | 2025-03-15 | Rhyno        | W   | 0.254      | 0.306        | 0.006 (0.000)    | 0.142 (0.011)    | 1 (0.254) |     3.69 | h0t, M1KA, opdust, snowiee, ZPX   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,943.40)
- Divide that value by the 5th highest value among all rosters ($440,967.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-27 |      1.000 | $587.00        | $587.00         |
| 2025-05-11 |      0.633 | $1,697.00      | $1,074.12       |
| 2025-03-16 |      0.260 | $1,084.00      | $282.28         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
