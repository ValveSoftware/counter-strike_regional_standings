### Roster Details<br />
Team Name: SHISHKA<br />
Roster: danistzz, Krad, Norwi, shalfey, yiksrezo<br />
Global Rank: [251](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [163]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  661.7<br />
<br />
Final Rank Value (661.7) = Starting Rank Value (631.0) + Head To Head Adjustments (30.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.243[<sup>1</sup>](#table2)
- Bounty Collected: 0.231[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.123<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 631.0
- 400 + ( ( 0.123 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 631.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      212 | 2026-06-19 | K27                  | L   | 1.000      | -            | -                | -                | -         |    -1.17 | danistzz, Krad, Norwi, shalfey, yiksrezo |
|            4 |      462 | 2026-06-07 | CYBERSHOKE           | W   | 1.000      | 0.143        | 0.020 (0.003)    | 0.586 (0.084)    | 0 (0.000) |    29.22 | danistzz, Krad, Norwi, shalfey, yiksrezo |
|            3 |     1173 | 2026-05-17 | Endless Journey      | L   | 0.867      | -            | -                | -                | -         |   -10.77 | danistzz, Krad, Norwi, shalfey, yiksrezo |
|            2 |     1198 | 2026-05-16 | CYBERSHOKE Prospects | L   | 0.860      | -            | -                | -                | -         |    -1.82 | danistzz, Krad, Norwi, shalfey, yiksrezo |
|            1 |     1250 | 2026-05-14 | Endless Journey      | W   | 0.848      | 0.278        | 0.008 (0.002)    | 0.341 (0.080)    | 0 (0.000) |    15.27 | danistzz, Krad, Norwi, shalfey, yiksrezo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($433.95)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-17 |      0.868 | $500.00        | $433.95         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
