### Roster Details<br />
Team Name: TSM<br />
Roster: acoR, niko, sirah, valde, Zyphon<br />
Global Rank: [265](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [151]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  490.2<br />
<br />
Final Rank Value (490.2) = Starting Rank Value (483.1) + Head To Head Adjustments (7.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.172[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.011[<sup>2</sup>](#table1)

The average of these factors is 0.046<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 483.1
- 400 + ( ( 0.046 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 483.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     2643 | 2024-12-12 | 9INE              | L   | 0.239      | -            | -                | -                | -         |    -0.68 | acoR, niko, sirah, valde, Zyphon |
|            8 |     2669 | 2024-12-10 | Iberian Soul      | L   | 0.226      | -            | -                | -                | -         |    -0.75 | acoR, niko, sirah, valde, Zyphon |
|            7 |     2698 | 2024-12-08 | Illuminar         | W   | 0.212      | 0.371        | 0.001 (0.000)    | 0.036 (0.003)    | 0 (0.000) |     4.52 | acoR, niko, sirah, valde, Zyphon |
|            6 |     2752 | 2024-12-06 | NAVI Junior       | L   | 0.199      | -            | -                | -                | -         |    -0.15 | acoR, niko, sirah, valde, Zyphon |
|            5 |     2847 | 2024-12-02 | Endpoint          | W   | 0.172      | 0.371        | 0.002 (0.000)    | 0.039 (0.002)    | 0 (0.000) |     3.77 | acoR, niko, sirah, valde, Zyphon |
|            4 |     3028 | 2024-11-23 | Ninjas in Pyjamas | L   | 0.111      | -            | -                | -                | -         |    -1.10 | acoR, niko, sirah, valde, Zyphon |
|            3 |     3056 | 2024-11-22 | PARIVISION        | W   | 0.105      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.105) |     1.54 | acoR, niko, sirah, valde, Zyphon |
|            2 |     3070 | 2024-11-21 | Virtus.pro        | L   | 0.099      | -            | -                | -                | -         |    -0.01 | acoR, niko, sirah, valde, Zyphon |
|            1 |     3080 | 2024-11-21 | 3DMAX             | L   | 0.098      | -            | -                | -                | -         |    -0.00 | acoR, niko, sirah, valde, Zyphon |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
