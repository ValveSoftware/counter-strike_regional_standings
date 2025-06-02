### Roster Details<br />
Team Name: HEROIC<br />
Roster: degster, kyxsan, NertZ, sjuush, TeSeS<br />
Global Rank: [147](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [85]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  672.9<br />
<br />
Final Rank Value (672.9) = Starting Rank Value (671.6) + Head To Head Adjustments (1.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.321[<sup>1</sup>](#table2)
- Bounty Collected: 0.265[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.005[<sup>2</sup>](#table1)

The average of these factors is 0.148<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 671.6
- 400 + ( ( 0.148 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 671.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     3722 | 2024-12-13 | G2            | L   | 0.062      | -            | -                | -                | -         |    -0.01 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            5 |     3791 | 2024-12-08 | Natus Vincere | W   | 0.029      | 1.000        | 0.498 (0.014)    | 0.383 (0.011)    | 1 (0.029) |     0.90 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            4 |     3820 | 2024-12-07 | Spirit        | L   | 0.023      | -            | -                | -                | -         |    -0.00 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            3 |     3846 | 2024-12-06 | The MongolZ   | L   | 0.016      | -            | -                | -                | -         |    -0.00 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            2 |     3865 | 2024-12-05 | FaZe          | W   | 0.010      | 1.000        | 0.029 (0.000)    | 0.008 (0.000)    | 1 (0.010) |     0.19 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            1 |     3881 | 2024-12-04 | BIG           | W   | 0.008      | 1.000        | 0.250 (0.002)    | 0.367 (0.003)    | 1 (0.008) |     0.25 | degster, kyxsan, NertZ, sjuush, TeSeS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,437.41)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.076 | $45,000.00     | $3,437.41       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
