### Roster Details<br />
Team Name: KUUSAMO<br />
Roster: epik, Keksimage, osku, rbm<br />
Global Rank: [240](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [154]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  662.3<br />
<br />
Final Rank Value (662.3) = Starting Rank Value (663.7) + Head To Head Adjustments (-1.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.268[<sup>1</sup>](#table2)
- Bounty Collected: 0.203[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.093[<sup>2</sup>](#table1)

The average of these factors is 0.142<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 663.7
- 400 + ( ( 0.142 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 663.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      615 | 2026-04-12 | CSDIILIT   | L   | 1.000      | -            | -                | -                | -         |    -9.54 | epik, Keksimage, Orava, osku, rbm  |
|            5 |      640 | 2026-04-11 | BOJONG     | W   | 1.000      | 0.309        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     9.20 | epik, Keksimage, Orava, osku, rbm  |
|            4 |      671 | 2026-04-10 | ENCE       | L   | 1.000      | -            | -                | -                | -         |    -6.34 | epik, Keksimage, Orava, osku, rbm  |
|            3 |     1792 | 2026-03-23 | Project 91 | L   | 0.920      | -            | -                | -                | -         |    -9.19 | epik, jalwar, Keksimage, osku, rbm |
|            2 |     1797 | 2026-03-23 | Phantom    | L   | 0.919      | -            | -                | -                | -         |    -2.83 | epik, jalwar, Keksimage, osku, rbm |
|            1 |     1804 | 2026-03-23 | EC BANGA   | W   | 0.919      | 0.333        | 0.003 (0.001)    | 0.133 (0.041)    | 1 (0.919) |    17.28 | epik, jalwar, Keksimage, osku, rbm |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($864.00)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-12 |      1.000 | $864.00        | $864.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
