### Roster Details<br />
Team Name: ZEVS<br />
Roster: bexyz, dobo, FELSADIA, GEZUU, versa<br />
Global Rank: [269](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_07_06.md)<br />
Regional Rank: [31]( ../../standings_asia_2026_07_06.md)<br />
<br />
Final Rank Value:  633.0<br />
<br />
Final Rank Value (633.0) = Starting Rank Value (642.3) + Head To Head Adjustments (-9.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.216[<sup>1</sup>](#table2)
- Bounty Collected: 0.212[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.079[<sup>2</sup>](#table1)

The average of these factors is 0.129<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 642.3
- 400 + ( ( 0.129 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 642.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1620 | 2026-05-02 | Just Swing | L   | 0.764      | -            | -                | -                | -         |    -8.26 | bexyz, dobo, FELSADIA, GEZUU, versa |
|            4 |     1669 | 2026-05-01 | Rooster    | L   | 0.758      | -            | -                | -                | -         |    -8.83 | bexyz, dobo, FELSADIA, GEZUU, versa |
|            3 |     1710 | 2026-04-30 | BMZ        | W   | 0.752      | 0.471        | 0.005 (0.002)    | 0.233 (0.083)    | 1 (0.752) |    18.40 | bexyz, dobo, FELSADIA, GEZUU, versa |
|            2 |     2661 | 2026-04-03 | NEXVOID    | L   | 0.572      | -            | -                | -                | -         |    -2.65 | bexyz, dobo, FELSADIA, GEZUU, versa |
|            1 |     2737 | 2026-04-02 | yunglean   | L   | 0.567      | -            | -                | -                | -         |    -7.92 | bexyz, dobo, FELSADIA, GEZUU, versa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($130.20)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-04 |      0.579 | $225.00        | $130.20         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
